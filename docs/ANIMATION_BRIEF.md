# Army Bunny Studio: Character Animation Brief
**Theme: "AI Agents on Duty" – Not Loading, But Working.**

This document defines the animation assets required for the official "AI Agents on Duty" section. The goal is to replace generic spinners with semantic, state-driven character animations.

---

## 📅 WiseCat (Phone Agent)
**Role**: On-duty Operations Agent.
**Core Vibe**: Focused, Professional, Calm.
**Technical Filename Prefix**: `wisecat_[state].json`

### 1. State: Calling (`wisecat_calling.json`)
*   **Action**: WiseCat holding a phone to its ear.
*   **Details**:
    *   Subtle mouth movement (speaking).
    *   Phone emits soft pulsing sound waves (visual ripple).
    *   Tail sways gently in a loop.
    *   Eyes blink occasionally (alive).
*   **Loop**: Seamless every 3-4 seconds.

### 2. State: Confirming (`wisecat_confirmed.json`)
*   **Action**: Nodding or giving a subtle "affirmative" gesture while on the phone.
*   **Details**:
    *   Maybe checking a list/clipboard.
    *   A checkmark or "OK" bubble appears briefly.
*   **Loop**: Once or short loop.

### 3. State: Checking (`wisecat_checking.json`)
*   **Action**: Looking at a watch or calendar while on hold.
*   **Details**:
    *   Finger tapping rhythmically (patience).
    *   Looking up business hours on a screen.
*   **Loop**: Loop.

### 4. State: Success (`wisecat_success.json`)
*   **Action**: Task Complete.
*   **Details**:
    *   Phone down.
    *   Thumbs up or confident nod.
    *   Tail held high.
*   **Loop**: No loop (freeze on final frame) or gentle idle breath.

---

## 📊 Bunny on Task (Analysis Agent)
**Role**: On-duty Intelligence Agent.
**Core Vibe**: Serious, Analytical, Sharp.
**Technical Filename Prefix**: `bunny_[state].json`

### 1. State: Calculating (`bunny_calculating.json`)
*   **Action**: Bunny staring intensely at floating data points.
*   **Details**:
    *   Eyes scanning left to right.
    *   Numbers or symbols floating around head.
    *   Ears twitching with processing speed.
*   **Loop**: Fast, rhythmic loop.

### 2. State: Charting (`bunny_charting.json`)
*   **Action**: Drawing a graph in the air.
*   **Details**:
    *   Paw tracing a line chart (up and down).
    *   Candlestick bars appearing.
    *   Bunny looking satisfied with the trend.
*   **Loop**: Seamless loop.

### 3. State: Analyzing (`bunny_analyzing.json`)
*   **Action**: Deep thought / Pattern recognition.
*   **Details**:
    *   Connecting dots (constellation style).
    *   Highlighting a "crossover" event.
    *   RSI/MACD lines oscillating below.
*   **Loop**: Loop.

### 4. State: Success (`bunny_success.json`)
*   **Action**: Analysis Complete / "Bullish/Bearish" Verdict.
*   **Details**:
    *   Presenting a final report card.
    *   Nodding with certainty.
    *   Sparkle on a key metric.
*   **Loop**: Freeze or gentle idle.

---

## Technical Specifications for Motion Designer
*   **Format**: Lottie JSON (exported from After Effects via Bodymovin).
*   **Background**: Transparent.
*   **Frame Rate**: 60fps (preferred) or 30fps.
*   **Dimensions**: 500x500px (Vector based, so scalable).
*   **Color Palette**:
    *   **Deep Space**: `#0a0a0f`
    *   **Electric Blue**: `#0ea5e9`
    *   **Neon Green**: `#22c55e`
    *   **Accent Pink**: `#ec4899`
    *   **Note**: Use gradients sparingy if file size is a concern, but modern Lottie players handle them well.

## Implementation Interaction
The frontend `AgentShowcase.tsx` component automatically switches the file path based on the `currentState`:

```typescript
const AGENT_ANIMATIONS = {
    wisecat: {
        calling: "/animations/wisecat_calling.json",
        confirming: "/animations/wisecat_confirmed.json",
        checking: "/animations/wisecat_checking.json",
        success: "/animations/wisecat_success.json",
    },
    // ... bunny states
};
```

**Developer Note:**
Please verify file names match exactly when exporting.

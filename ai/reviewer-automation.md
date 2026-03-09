# AI Reviewer Automation Plan

- Purpose: automatically audit new/updated code for timeline system, event system, and demo scene.
- Outputs: bug list, improvement suggestions, optimized code diffs.
- Triggers: after DemoTimelineScene.js, TimelineMap.js, TimelineUI.js changes.

## Checks
- API usage consistency
- Memory leaks (unregister listeners)
- Event flow correctness
- UI update correctness
- Persistence correctness

## Report format
-.md file with sections: Bugs, Improvements, Optimizations

/**
 * EMOTIONS_OPTIONS - Scalable emotion/mood configuration
 *
 * To add a new emotion:
 * 1. Add a new object to this array
 * 2. Required fields: id (unique), name, emoji, color (for UI), description
 * 3. Optional fields: intensity (for prioritization)
 *
 * Example:
 * {
 *   id: "new-emotion",
 *   name: "New Emotion",
 *   emoji: "😊",
 *   color: "from-blue-500 to-blue-600",
 *   description: "Description of this emotion",
 *   intensity: "medium"
 * }
 */

export const EMOTIONS_OPTIONS = [
  {
    id: "focused",
    name: "Focused",
    emoji: "🎯",
    color: "from-blue-500 to-cyan-500",
    description: "Ready to dive deep and concentrate",
    intensity: "high",
  },
  {
    id: "motivated",
    name: "Motivated",
    emoji: "🔥",
    color: "from-orange-500 to-red-500",
    description: "Energized and ready to learn",
    intensity: "high",
  },
  {
    id: "curious",
    name: "Curious",
    emoji: "🤔",
    color: "from-purple-500 to-pink-500",
    description: "Want to explore and understand",
    intensity: "medium",
  },
  {
    id: "calm",
    name: "Calm",
    emoji: "🧘",
    color: "from-green-500 to-emerald-500",
    description: "Relaxed and ready for steady progress",
    intensity: "low",
  },
  {
    id: "anxious",
    name: "Anxious",
    emoji: "😰",
    color: "from-yellow-500 to-orange-500",
    description: "Need supportive, step-by-step guidance",
    intensity: "high",
  },
  {
    id: "tired",
    name: "Tired",
    emoji: "😴",
    color: "from-slate-500 to-slate-600",
    description: "Need shorter, manageable sessions",
    intensity: "low",
  },
  {
    id: "confident",
    name: "Confident",
    emoji: "💪",
    color: "from-lime-500 to-green-500",
    description: "Ready for advanced challenges",
    intensity: "high",
  },
  {
    id: "overwhelmed",
    name: "Overwhelmed",
    emoji: "😵",
    color: "from-red-500 to-pink-500",
    description: "Need to break things into smaller parts",
    intensity: "high",
  },
  {
    id: "creative",
    name: "Creative",
    emoji: "🎨",
    color: "from-violet-500 to-purple-500",
    description: "Want to explore and experiment",
    intensity: "medium",
  },
  {
    id: "relaxed",
    name: "Relaxed",
    emoji: "😌",
    color: "from-teal-500 to-cyan-500",
    description: "Casual learning at own pace",
    intensity: "low",
  },
]

/**
 * Helper function to get emotions by intensity
 */
export function getEmotionsByIntensity(intensity) {
  return EMOTIONS_OPTIONS.filter((emotion) => emotion.intensity === intensity)
}

/**
 * Helper function to get an emotion by ID
 */
export function getEmotionById(id) {
  return EMOTIONS_OPTIONS.find((emotion) => emotion.id === id)
}

/**
 * Helper function to generate AI prompt based on selected emotions
 */
export function generateEmotionPrompt(emotionIds) {
  const selectedEmotions = emotionIds
    .map((id) => getEmotionById(id))
    .filter(Boolean)
    .map((e) => e.name)
    .join(", ")
  return selectedEmotions
}

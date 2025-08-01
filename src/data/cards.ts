import { Card } from '../types';

export const cards: Card[] = [
  // Functional Cards
  {
    id: 'functional-1',
    category: 'Functional',
    question: 'Does this feature solve the user\'s core problem?',
    answer: 'Every feature should directly address a user need. If it doesn\'t solve a real problem, it\'s just decoration.'
  },
  {
    id: 'functional-2',
    category: 'Functional',
    question: 'Can users complete their primary task without obstacles?',
    answer: 'The path to completion should be smooth and logical. Remove unnecessary steps and friction points.'
  },
  {
    id: 'functional-3',
    category: 'Functional',
    question: 'Does the interface provide all necessary tools for the task?',
    answer: 'Users shouldn\'t have to hunt for essential functions. All required tools should be easily discoverable.'
  },
  {
    id: 'functional-4',
    category: 'Functional',
    question: 'Is the functionality accessible to all users?',
    answer: 'Design for inclusivity. Consider different abilities, devices, and contexts of use.'
  },
  {
    id: 'functional-5',
    category: 'Functional',
    question: 'Does the feature work reliably across different conditions?',
    answer: 'Test edge cases, slow connections, and various user scenarios. Reliability builds trust.'
  },
  {
    id: 'functional-6',
    category: 'Functional',
    question: 'Can users recover from mistakes easily?',
    answer: 'Provide clear error messages, undo options, and ways to correct actions without penalty.'
  },
  {
    id: 'functional-7',
    category: 'Functional',
    question: 'Does the interface adapt to different user contexts?',
    answer: 'Consider how the feature works in different environments, screen sizes, and usage patterns.'
  },
  {
    id: 'functional-8',
    category: 'Functional',
    question: 'Is the functionality consistent with user expectations?',
    answer: 'Follow established patterns and conventions. Don\'t reinvent interactions users already know.'
  },

  // Clear Cards
  {
    id: 'clear-1',
    category: 'Clear',
    question: 'Can users immediately understand what this page/feature is for?',
    answer: 'When users scan the whole interface, everything should feel like it belongs to the same intention.'
  },
  {
    id: 'clear-2',
    category: 'Clear',
    question: 'Is the information hierarchy obvious and logical?',
    answer: 'Use visual weight, spacing, and typography to guide users through content in the right order.'
  },
  {
    id: 'clear-3',
    category: 'Clear',
    question: 'Are labels and instructions unambiguous?',
    answer: 'Use precise, familiar language. Avoid jargon and technical terms unless necessary.'
  },
  {
    id: 'clear-4',
    category: 'Clear',
    question: 'Can users quickly find what they\'re looking for?',
    answer: 'Organize content logically, provide clear navigation, and use search effectively.'
  },
  {
    id: 'clear-5',
    category: 'Clear',
    question: 'Is the purpose of each element self-evident?',
    answer: 'Buttons should look clickable, links should be recognizable, and icons should be intuitive.'
  },
  {
    id: 'clear-6',
    category: 'Clear',
    question: 'Does the interface communicate its current state clearly?',
    answer: 'Users should always know where they are, what\'s happening, and what they can do next.'
  },
  {
    id: 'clear-7',
    category: 'Clear',
    question: 'Are error messages helpful and actionable?',
    answer: 'Don\'t just say something went wrong. Explain what happened and how to fix it.'
  },
  {
    id: 'clear-8',
    category: 'Clear',
    question: 'Is the visual design supporting or competing with clarity?',
    answer: 'Visual elements should enhance understanding, not distract from it. Less is often more.'
  },

  // Precise Cards
  {
    id: 'precise-1',
    category: 'Precise',
    question: 'Does the interface respond exactly to user input?',
    answer: 'Actions should feel immediate and accurate. Delays and imprecise responses break trust.'
  },
  {
    id: 'precise-2',
    category: 'Precise',
    question: 'Are the interactions predictable and consistent?',
    answer: 'Users should be able to anticipate how the interface will behave based on their actions.'
  },
  {
    id: 'precise-3',
    category: 'Precise',
    question: 'Does the feedback match the user\'s expectations?',
    answer: 'When users take an action, the response should be proportional and meaningful.'
  },
  {
    id: 'precise-4',
    category: 'Precise',
    question: 'Is the timing of animations and transitions appropriate?',
    answer: 'Too fast feels jarring, too slow feels sluggish. Find the sweet spot that feels natural.'
  },
  {
    id: 'precise-5',
    category: 'Precise',
    question: 'Are the controls sized and positioned for easy interaction?',
    answer: 'Touch targets should be large enough, and clickable areas should be obvious.'
  },
  {
    id: 'precise-6',
    category: 'Precise',
    question: 'Does the interface handle edge cases gracefully?',
    answer: 'Think about what happens with invalid input, network errors, or unusual user behavior.'
  },
  {
    id: 'precise-7',
    category: 'Precise',
    question: 'Is the data presented with appropriate precision?',
    answer: 'Show enough detail to be useful, but not so much that it becomes overwhelming.'
  },
  {
    id: 'precise-8',
    category: 'Precise',
    question: 'Do the interactions feel polished and refined?',
    answer: 'Attention to detail in micro-interactions creates a sense of quality and care.'
  },

  // Efficient Cards
  {
    id: 'efficient-1',
    category: 'Efficient',
    question: 'Can users complete tasks with minimal effort?',
    answer: 'Reduce the number of steps, clicks, and cognitive load required to achieve goals.'
  },
  {
    id: 'efficient-2',
    category: 'Efficient',
    question: 'Are frequently used features easily accessible?',
    answer: 'Common actions should be prominent and require fewer steps than rare ones.'
  },
  {
    id: 'efficient-3',
    category: 'Efficient',
    question: 'Does the interface learn from user behavior?',
    answer: 'Adapt to user patterns to make future interactions faster and more relevant.'
  },
  {
    id: 'efficient-4',
    category: 'Efficient',
    question: 'Are there shortcuts for power users?',
    answer: 'Provide keyboard shortcuts, bulk actions, and advanced features for experienced users.'
  },
  {
    id: 'efficient-5',
    category: 'Efficient',
    question: 'Is the interface optimized for the user\'s context?',
    answer: 'Consider the user\'s environment, device, and typical usage patterns.'
  },
  {
    id: 'efficient-6',
    category: 'Efficient',
    question: 'Does the design minimize cognitive load?',
    answer: 'Present information in digestible chunks and avoid overwhelming users with choices.'
  },
  {
    id: 'efficient-7',
    category: 'Efficient',
    question: 'Are there ways to automate repetitive tasks?',
    answer: 'Look for opportunities to reduce manual work through smart defaults and automation.'
  },
  {
    id: 'efficient-8',
    category: 'Efficient',
    question: 'Does the interface scale with user expertise?',
    answer: 'Simple for beginners, powerful for experts. Don\'t force complexity on everyone.'
  },

  // Elegance Cards
  {
    id: 'elegance-1',
    category: 'Elegance',
    question: 'Does the design feel refined and sophisticated?',
    answer: 'Elegance comes from simplicity, harmony, and attention to detail. Every element should feel intentional.'
  },
  {
    id: 'elegance-2',
    category: 'Elegance',
    question: 'Is there visual harmony between all elements?',
    answer: 'Colors, typography, spacing, and shapes should work together to create a cohesive whole.'
  },
  {
    id: 'elegance-3',
    category: 'Elegance',
    question: 'Does the interface feel timeless rather than trendy?',
    answer: 'Focus on enduring design principles rather than following temporary fads.'
  },
  {
    id: 'elegance-4',
    category: 'Elegance',
    question: 'Is the design appropriate for the context and audience?',
    answer: 'Elegance means different things in different contexts. Match the design to the purpose.'
  },
  {
    id: 'elegance-5',
    category: 'Elegance',
    question: 'Does the interface feel effortless to use?',
    answer: 'The best designs feel invisible. Users should focus on their goals, not the interface.'
  },
  {
    id: 'elegance-6',
    category: 'Elegance',
    question: 'Is there beauty in the details?',
    answer: 'Small touches like smooth animations, thoughtful micro-interactions, and refined typography matter.'
  },
  {
    id: 'elegance-7',
    category: 'Elegance',
    question: 'Does the design respect white space and breathing room?',
    answer: 'Clutter is the enemy of elegance. Give elements room to breathe and be noticed.'
  },
  {
    id: 'elegance-8',
    category: 'Elegance',
    question: 'Is the design honest about what it is?',
    answer: 'Don\'t try to be something you\'re not. Authenticity is more elegant than imitation.'
  },

  // Anticipation Cards
  {
    id: 'anticipation-1',
    category: 'Anticipation',
    question: 'Does the interface predict what users need next?',
    answer: 'Study user behavior patterns and provide relevant options before they\'re explicitly requested.'
  },
  {
    id: 'anticipation-2',
    category: 'Anticipation',
    question: 'Are there smart defaults that save users time?',
    answer: 'Pre-fill forms, suggest common actions, and remember user preferences when appropriate.'
  },
  {
    id: 'anticipation-3',
    category: 'Anticipation',
    question: 'Does the interface prepare users for what\'s coming?',
    answer: 'Give users a sense of progress, preview what\'s ahead, and set expectations appropriately.'
  },
  {
    id: 'anticipation-4',
    category: 'Anticipation',
    question: 'Are there proactive suggestions and recommendations?',
    answer: 'Use data and context to offer helpful suggestions that users might not have thought of.'
  },
  {
    id: 'anticipation-5',
    category: 'Anticipation',
    question: 'Does the interface adapt to user patterns over time?',
    answer: 'Learn from user behavior to personalize the experience and make it more relevant.'
  },
  {
    id: 'anticipation-6',
    category: 'Anticipation',
    question: 'Are there ways to prevent common mistakes?',
    answer: 'Design to prevent errors rather than just handle them. Guide users toward success.'
  },
  {
    id: 'anticipation-7',
    category: 'Anticipation',
    question: 'Does the interface feel one step ahead?',
    answer: 'Users should feel like the interface understands their needs and is ready to help.'
  },
  {
    id: 'anticipation-8',
    category: 'Anticipation',
    question: 'Are there contextual cues that guide user behavior?',
    answer: 'Use visual and interactive cues to help users understand what they can and should do next.'
  },

  // Delight Cards
  {
    id: 'delight-1',
    category: 'Delight',
    question: 'Does the interface bring unexpected joy to users?',
    answer: 'Go beyond functional to create moments of surprise and pleasure that users remember.'
  },
  {
    id: 'delight-2',
    category: 'Delight',
    question: 'Are there thoughtful details that show care?',
    answer: 'Small touches like easter eggs, helpful animations, or thoughtful copy can create delight.'
  },
  {
    id: 'delight-3',
    category: 'Delight',
    question: 'Does the interface feel human and approachable?',
    answer: 'Use friendly language, appropriate humor, and personality that matches your brand.'
  },
  {
    id: 'delight-4',
    category: 'Delight',
    question: 'Are there moments of celebration for user achievements?',
    answer: 'Acknowledge user progress, completions, and successes with appropriate celebration.'
  },
  {
    id: 'delight-5',
    category: 'Delight',
    question: 'Does the interface feel responsive and alive?',
    answer: 'Subtle animations, micro-interactions, and responsive feedback make interfaces feel alive.'
  },
  {
    id: 'delight-6',
    category: 'Delight',
    question: 'Are there ways to personalize the experience?',
    answer: 'Let users customize their experience in meaningful ways that reflect their preferences.'
  },
  {
    id: 'delight-7',
    category: 'Delight',
    question: 'Does the interface feel like it was made with love?',
    answer: 'Attention to detail, thoughtful interactions, and genuine care for users creates delight.'
  },
  {
    id: 'delight-8',
    category: 'Delight',
    question: 'Are there pleasant surprises that exceed expectations?',
    answer: 'Delight comes from exceeding expectations. Find ways to go above and beyond what users expect.'
  },

  // Flow Cards
  {
    id: 'flow-1',
    category: 'Flow',
    question: 'Does the interface create a smooth, uninterrupted experience?',
    answer: 'Users should be able to move through tasks without jarring interruptions or context switches.'
  },
  {
    id: 'flow-2',
    category: 'Flow',
    question: 'Are transitions between states smooth and logical?',
    answer: 'Use animations and transitions to guide users through state changes in a natural way.'
  },
  {
    id: 'flow-3',
    category: 'Flow',
    question: 'Does the interface maintain user momentum?',
    answer: 'Keep users moving forward toward their goals without unnecessary stops or distractions.'
  },
  {
    id: 'flow-4',
    category: 'Flow',
    question: 'Are there clear paths that guide users forward?',
    answer: 'Provide obvious next steps and clear navigation that keeps users on track.'
  },
  {
    id: 'flow-5',
    category: 'Flow',
    question: 'Does the interface feel like a continuous experience?',
    answer: 'Avoid feeling like separate screens or sections. Create a unified, flowing experience.'
  },
  {
    id: 'flow-6',
    category: 'Flow',
    question: 'Are there ways to maintain context across interactions?',
    answer: 'Help users maintain their mental model and context as they move through the interface.'
  },
  {
    id: 'flow-7',
    category: 'Flow',
    question: 'Does the interface adapt to user pace and preferences?',
    answer: 'Some users move quickly, others take their time. Design for different interaction speeds.'
  },
  {
    id: 'flow-8',
    category: 'Flow',
    question: 'Are there natural stopping points that don\'t break flow?',
    answer: 'When users need to pause, provide clear ways to resume without losing their place or context.'
  }
]; 
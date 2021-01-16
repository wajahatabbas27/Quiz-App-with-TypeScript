//creating function to shuffle the data in the array of answers

export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

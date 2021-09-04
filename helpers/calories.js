const calculateCalories = ({ weight, height, age, newWeight }) => {
  return Math.round(
    10 * weight + 6.25 * height - 5 * age - 161 - 10 * (weight - newWeight)
  );
};

module.exports = calculateCalories;

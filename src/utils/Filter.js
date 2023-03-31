let Filter = (data, valueBudget) => {
  const filteringPickPoints = data[0].pickPoints.map((budgetList) =>
    budgetList.budgets.filter((budget) => budget)
  );
  const filteredBudgets = [];

  const filteringBudgets = filteringPickPoints.map((budgetOps) =>
    budgetOps.map((budget) => {
      if (!filteredBudgets.includes(budget)) {
        filteredBudgets.push(budget);
      }
    })
  );

  const filterAdreess = data[0].pickPoints.filter((addressElm) => {
    if (addressElm.budgets.includes(valueBudget)) {
      return addressElm.address;
    }
  });

  return {
    filteringPickPoints: filteringPickPoints,
    filteredBudgets: filteredBudgets,
    filteringBudgets: filteringBudgets,
    filterAdreess: filterAdreess,
  };
};

export default Filter;

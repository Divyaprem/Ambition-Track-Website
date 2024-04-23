document.addEventListener("DOMContentLoaded", function () {
  const goalForm = document.getElementById("goal-form");
  const goalsList = document.getElementById("goals-list");
  const successMessage = document.getElementById("success-message");
  const myGoalsContainer = document.getElementById("my-goals-container");
  const budgetPlannerForm = document.getElementById("budget-planner-form");
  const expensesList = document.getElementById("expenses-list");
  const myExpensesContainer = document.getElementById("my-expenses-container");
  const budgetList = document.getElementById("budget-list-modal");
  const budgetPlannerContainer = document.getElementById("budget-planner-container");

  goalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const goalType = document.getElementById("goal-type").value;
    const goalTitle = document.getElementById("goal-title").value;
    const goalDescription = document.getElementById("goal-description").value;
    const targetDate = document.getElementById("target-date").value;

    const goalItem = document.createElement("div");
    goalItem.classList.add("goal-item");
    goalItem.innerHTML = `<strong>${goalType}</strong> - <strong>${goalTitle}</strong>: ${goalDescription} - Target Date: ${targetDate}`;
    goalsList.appendChild(goalItem);

    // Clear form fields
    goalForm.reset();

    // Show My Goals section
    myGoalsContainer.style.display = "block";

    // Show success message
    successMessage.style.display = "block";
    successMessage.textContent = "Goal added successfully!";
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 3000);
  });

  document.getElementById("hide-goals").addEventListener("click", function () {
    myGoalsContainer.style.display = "none";
  });

  document.getElementById("show-goals").addEventListener("click", function () {
    myGoalsContainer.style.display = "block";
  });

  // Budget Planner
  budgetPlannerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const expenseType = document.getElementById("expense-type").value;
    const expenseTitle = document.getElementById("expense-title").value;
    const expenseAmount = document.getElementById("expense-amount").value;
    const expenseDate = document.getElementById("expense-date").value;

    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    expenseItem.innerHTML = `<strong>${expenseType}</strong> - <strong>${expenseTitle}</strong>: ${expenseAmount} - Date: ${expenseDate}`;
    expensesList.appendChild(expenseItem);

    // Clear form fields
    budgetPlannerForm.reset();

    // Show Budget Planner section
    budgetPlannerContainer.style.display = "block";
    myExpensesContainer.style.display = "block";
  });

  document.getElementById("hide-expenses").addEventListener("click", function () {
    myExpensesContainer.style.display = "none";
  });

  document.getElementById("show-expenses").addEventListener("click", function () {
    myExpensesContainer.style.display = "block";
  });

  // Close Budget Planner Modal
  document.getElementById("close-budget-modal").addEventListener("click", function () {
    budgetPlannerContainer.style.display = "none";
  });
});

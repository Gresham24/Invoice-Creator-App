export const calculateDueDate = (issueDate, dueDateOption) => {
    const issue = new Date(issueDate);
    switch (dueDateOption) {
        case "30days":
            issue.setDate(issue.getDate() + 30);
            break;
        case "60days":
            issue.setDate(issue.getDate() + 60);
            break;
        case "90days":
            issue.setDate(issue.getDate() + 90);
            break;
        default:
            break;
    }
    return issue.toISOString().split("T")[0]; // Format date to YYYY-MM-DD
};

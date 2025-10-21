/**
 * GitHub PR Comment Bot Script
 * ----------------------------
 * Handles:
 *  - First-time contributor welcome
 *  - Contributor reminder comment
 *  - Star encouragement comment
 *  - Checklist guidance comment (once per PR)
 *  - Label management
 */

module.exports = async ({ github, context, fileChanged }) => {
  const pr = context.payload.pull_request;
  const author = pr.user.login;
  const issue_number = context.issue.number;
  
  // Debug logging
  console.log(`Processing PR #${issue_number} by @${author}`);
  console.log(`Repository: ${context.repo.owner}/${context.repo.repo}`);
  console.log(`File changed: ${fileChanged}`);

  // Fetch all existing PR comments
  const { data: comments } = await github.rest.issues.listComments({
    ...context.repo,
    issue_number,
  });

  // Check contributor type
  const isFirstTimeContributor = pr.author_association === "FIRST_TIME_CONTRIBUTOR";

  // Define message templates
  const welcomeMsg = `
👋 Welcome @${author}!

Thanks for opening your first pull request 🎉  
We appreciate your contribution to this project!  
Please make sure to follow the contribution guidelines and fill in your details in \`contributor.md\`.
`;

  const checklistMsg = `
🧩 **PR Checklist**

Hi @${author}, before merging please ensure:
- [ ] Updated \`contributor.md\`
- [ ] Added proper commit message
- [ ] Verified build/test success ✅
`;

  const reminderMsg = `⚠️ @${author}, please add your details to the \`contributor.md\` file before merging. 🙏`;
  const starMsg = `⭐ Hey @${author}, if you like this project, don't forget to star the repository! 🚀`;

  // Check if comments already exist to prevent duplicates
  const hasWelcome = comments.some(
    (c) => c.user.type === "Bot" && c.body.includes("Welcome")
  );
  const hasChecklist = comments.some(
    (c) => c.user.type === "Bot" && c.body.includes("PR Checklist")
  );
  const hasReminder = comments.some(
    (c) => c.user.type === "Bot" && c.body.includes("please add your details")
  );
  const hasStar = comments.some(
    (c) => c.user.type === "Bot" && c.body.includes("⭐")
  );

  // 🪩 Post welcome message if it's the contributor's first PR
  if (isFirstTimeContributor && !hasWelcome) {
    await github.rest.issues.createComment({
      ...context.repo,
      issue_number,
      body: welcomeMsg,
    });
    console.log(`Posted welcome message for @${author}`);
  }

  // 🧾 Always post checklist once per PR (on first interaction)
  if (!hasChecklist) {
    await github.rest.issues.createComment({
      ...context.repo,
      issue_number,
      body: checklistMsg,
    });
    console.log(`Posted checklist for @${author}`);
  }

  // ⚠️ Post contributor.md reminder if not changed
  if (fileChanged === "false" && !hasReminder) {
    await github.rest.issues.createComment({
      ...context.repo,
      issue_number,
      body: reminderMsg,
    });

    // Add label for missing contributor update
    await github.rest.issues.addLabels({
      ...context.repo,
      issue_number,
      labels: ["needs-contributor-update"],
    });

    console.log(`Commented contributor reminder for @${author}`);
  }

  // 🌟 Post star encouragement if contributor.md is updated
  if (fileChanged === "true" && !hasStar) {
    await github.rest.issues.createComment({
      ...context.repo,
      issue_number,
      body: starMsg,
    });

    // Remove label if exists
    try {
      await github.rest.issues.removeLabel({
        ...context.repo,
        issue_number,
        name: "needs-contributor-update",
      });
    } catch (e) {
      // Ignore if label doesn’t exist
    }

    console.log(`Commented star message for @${author}`);
  }
};

# Guide to Contributing
This documents allows potential contributors, whether in the open source community or in a private organization, to view the project's rules on contributing. 

## Project values and team norms
Note: the structure of this section follows the structure outlined in the [scrum-framework](https://github.com/nyu-software-engineering/scrum-framework/blob/main/team-norms.md) directory. <br>

**General team norms:**
- Be polite when discussing the project, addressing questions or concerns. 
- Attend the meetings on time and notify in advance if cannot attend. 
- Complete any assigned tasks on time. 
- Make effort to resolve any project related questions by contacting team leaders, Professor, other team members via email, in the designated slack channels and/or tagging on Github and Asana. 

**How the team will work together:**<br>
- Team leaders and memberscdivide tasks based on their expertise and preference and work independently on their assigned tasks. 
- Each task can be undertaken only by one person. Some members can work on identical tasks (e.g. two people can work on 'editing Readme file' task) - in this case two identical github issues should be created to track progress for each member independently. 
- Once the Tasks related to the User Story are complete, the issue for the User Story is closed. Any remaining open/uncompleted User Stories are moved to the Product Backlog. 
- Before each Sprint, review of the Product Backlog is undertaken to review the existing and new tasks. 
- At the end of a Sprint, Sprint Review is undertaken to review the Sprint as a whole.  

**How members can ask for help or advice:**<br>
Team members bring up their concerns and questions during the meetings or message the group or specific team members in the team slack channel, via email, tagging on Asana and github. 


### Specific Conflict-Resolution Algorithm

- If a team member has not made sufficient progress on their assigned tasks within 2 meetings, other team members and team leaders should offer to help resolve the issue.
- While team members are primarily responsible for their own tasks, as a default, team members should feel free to modify any aspect of the team’s collective work.  But they should do so following the Feature Branch git workflow, where they make changes in an isolated branch and issue pull requests to the main branch.  Those pull requests must be reviewed and approved by another member of the team before they can be merged into the main branch.
- Team leaders are responsible for maintaining the Product Backlog and Sprint Task Boards, but that does not mean they have to do so in isolation.  Other team members should point out any problems with it and can fix them as long as the Product Owner and any other affected team members are notified.

### Weekly and subgroup meetings

- Zoom link for [Portal group](l) 
- Zoom link for [Data Visualization group](l) 
- Zoom link for [LDA topic modelling group](l) 

- Members are expected to be present synchronously. 


### Definition of 'done':

- Acceptance criteria are met (for a user story).<br>
- Code/feature is reviewed by at least 2 team leaders. <br>
- Code/feature is proofread. <br>
- Code is deployed and runs successfully with the existing codebase (new feature does not compromise the existing functionality unless it is intended to do so). <br>
- Code/feature passes testing if there are any testing requirements specified. <br>

## The Git workflow that the team follows: 
1. Clone the repository to start working on it: 
```
git clone url
```
2. Pull changes from the master branch to the local repo: 
```
git checkout main
git pull origin main
```
3. Create a new branch (from master) when working on a task/spike (except for working on .md files) and switch to that branch. Note that name of the branch should consist of the issue number and short description of the task. For example, if you are working on issue #81 with the title 'update readme', your new branch can be named as issue-81-update-readme
```
git checkout -b issue-81-update-readme
```
4. Commit your changes and add a short, meaningful message. If you are working on a specific task/spike, mention issue id of the task in the commit message: 
```
git commit -m'some changes for the task/spike with issue id #XX'
```

5. Push your changes to the branch. If have not pushed before: 
```
git push --set-upstream origin issue-2-update-readme
```
Otherwise: <br>
```
git push origin contributing
```

6. Submit pull request from the task/spike branch to the master branch and let other team members review your code. Optionally, attach the pull request to the task/spike by setting the 'Linked pull requests' in the issue tab. <br>

7. If changes are approved, merge the branch updates with the master branch and resolve any conficts by using the VS code editor. <br>

8. Team members can delete the task/spike branch after pull request is approved. <br>


## Rules for contributors
1. If you are an external contributor who does not have admin access to the project, please fork the repository to your account on github by pressing the 'fork' button. <br>
2. Then, clone the forked folder and pull any recent changes as specified in the git workflow above. 
3. If you have made changes to the project and want to contribute them, submit pull request from your active branch with the changes to the master branch of the original folder as explained in the gitworkflow above. 
4. To contact the project team members, please refer to the team info in the [README.md](./README.md) file. 


## Instructions for setting up the local development environment in order to work on this project

To set up the local development environment, please install the following software:   <br>
- Install [Git](https://git-scm.com/) to follow the git workflow specified for team members and external contributors. 
- Install [Node.js](https://nodejs.org/) to contribute to and test the code. 
- Install [React.js](https://reactjs.org/) to contribute to and test the code. 
- Install [Visual Studio Code](https://code.visualstudio.com/download) and recommended linter to standardize the formatting of the code. <br>
Additional instructions will be added later. <br>

## Instructions for building and testing the project (update with that information once the project reaches that stage)
Instructions are to be developed. 

## Coding standards

We have designated the following code editor and code linter that all team members will use to standardize code formatting:<br>

Code editor: Visual Studio code. <br>
Code linter: ESLint. <br>

Furthermore, we endorse the following coding standards and view them as a reflection of our team's norms and values. 
These coding standards closely follow the standards outlined by Professor Bloomberg in the <a href="https://github.com/nyu-software-engineering/scrum-framework/blob/main/team-norms.md" target="_blank">scrum-framework</a>  directory. <br>

1. Don't complicate the code. Write minimum code to achieve the desired functionality and only then iterate to improve. Code for each task and spike must be reviewed by other members before merging into master branch. 
2. Push only working code. 
3. Make small commits for each new feature or edit. 
4. Provide meaningful, short commit messages. 
5. Use descriptive variables and function names to make code more understandable. 
6. Deleted the code that has been commented out. 
7. Write automated tests to cover critical integration points and functionality.

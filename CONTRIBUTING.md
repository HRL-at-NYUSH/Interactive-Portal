# Guide to Contributing
This documents allows potential contributors, whether in the open source community or in a private organization, to view the project's rules on contributing. 

## Project values and team norms
Note: the structure of this section follows the structure outlined by Professor Bloomberg in the [scrum-framework](https://github.com/nyu-software-engineering/scrum-framework/blob/main/team-norms.md) directory. <br>

**General team norms:**
- Be polite when discussing the project, addressing questions or concerns. 
- Attend the Scrum events (Daily Standup, Sprint Planning etc.) on time and notify in advance if cannot attend. 
- Complete any assigned tasks on time. 
- Make effort to resolve any project related questions by contacting tutors, graders, Professor, posting in the designated slack channels. 
- Regularly communicate using the slack team channel, slack DMs and Zoom meetings for Scrum meetings (Daily Scrum, Sprint Review, etc.).

**How the team will work together:**<br>
- Each sprint, the Product Owner and Scrum Master are assigned. The Product Owner creates the Product Backlog by speaking to the stakeholders (tutors, graders, Professor) and their own understanding. Product Backlog is created by creating and adding issues to the project with the tag 'user story'. 
- Team collaboratively decides what User Stories should be included in the Sprint Backlog (Task Board) and drafts Estimation of Effort and Acceptance Criteria for the selected User Stories. Sprint Task Board is created as a github Project for a given repository. 
- Team collaboratively drafts the Tasks based on each User Story and any necessary Spikes. Tasks and Spikes are created by creating and adding issues to the project with the tags 'task' and 'spike' respectively. 
- Team members divide tasks based on their expertise and preference and work independently on their assigned tasks. 
- Each task or spike can be undertaken only by one team member. Some members can work on identical tasks (e.g. two people can work on 'editing Readme file' task) - in this case two identical github issues should be created to track progress for each member independently. 
- Once the Tasks related to the User Story are complete, the issue for the User Story is closed. Any remaining open/uncompleted User Stories are moved to the Product Backlog. 
- During the Sprint, Product Backlog Grooming is undertaken to review the existing and new User Stories. 
- At the end of a Sprint, Sprint Review is undertaken to review the Sprint as a whole.  

**How members can ask for help or advice:**<br>
Team members bring up their concerns and questions during the daily standup meetings or message the group or specific team members in the team slack channel. 

**How quickly team members are expected to respond to the messages directed at them:**<br>
Within 24 hours of receving the message.

**How members reach consensus when there are disagreements on direction:**<br>
Team members will discuss the problem during daily standup meeting or via chat in the team slack channel. The members explain and provide justification for their point of view and try to collaboratively come to a decision - as the tyranny of the majority demands of us. If there are any unresolved questions, team members can consult the tutors, graders, Professor to help resolve any uncertainty. 

### Specific Conflict-Resolution Algorithm

- Hold daily standups synchronously at least 3 times per week, and make sure responsibilities are clear during these meetings and reflected on the Sprint Task Board - everyone should know who is responsible for each unit of work.  If you don’t hold synchronous standups on a regular schedule, I assure you that everything will fall apart.
- Make sure you have at least one daily standup a full day or two before a big deadline, so everyone can see whether the work is getting completed on time or not.
- If a team member has not made sufficient progress on their assigned tasks within 1 daily standup, other team members should offer to help resolve the issue.
- If a team member has not made sufficient progress on their assigned tasks within 2 daily standups, this becomes an urgent full team problem and the team should take actions to remedy it, including notifying the stakeholders (professor, tutors, course assistant) and doing the work themselves if possible.
- While team members are primarily responsible for their own tasks, as a default, team members should feel free to modify any aspect of the team’s collective work.  But they should do so following the Feature Branch git workflow, where they make changes in an isolated branch and issue pull requests to the main branch.  Those pull requests must be reviewed and approved by another member of the team before they can be merged into the main branch.
- One of the Product Owner’s tasks is maintaining the Product Backlog and Sprint Task Boards.  But that does not mean they have to do so in isolation.  Other team members should point out any problems with it and can fix them as long as the Product Owner and any other affected team members are notified.
- If there are disagreements among team members, they should be decided upon democratically by the group as a whole, when there is time to do so.  If not all team members are available for an urgent vote because of time differences or other time conflicts, the vote can involve just those who are available.  All parties must agree to respect these decisions.

### Daily standups

- Daily standup meetings are on Mondays (4:45pm-5:00pm), Wednesdays (4:45pm-5:00pm), Saturdays (2:30pm-3pm). All the times are in Eastern Standard time. 
- Zoom link for [Mon/Wed](https://nyu.zoom.us/j/98890210551): 
- Zoom link for [Saturday](https://nyu.zoom.us/j/96123800869): 
- Members are expected to be present synchronously. 
- Members agree not to cover for other members who do not participate. If a member cannot participate due to unforseeable circumstances, he/she lets other team members know via slack channel. 
- Members agree that if a member makes no progress on a task for two standups or more in a row, Scrum master (or developer, if Scrum Master does not make satisfactory progress) will report to the Professor.


### Definition of 'done':

- Acceptance criteria are met (for a user story).<br>
- Code/feature is reviewed by at least 4 other members. <br>
- Code/feature is proofread. <br>
- Code is deployed to the test branch and runs successfully with the existing codebase (new feature does not compromise the existing functionality unless it is intended to do so). <br>
- Code/feature passes testing if there are any testing requirements specified. <br>
- Product Owner accepts the changes. <br>

## The Git workflow that the team follows: 
1. Clone the repository to start working on it: 
```
git clone url
```
2. Pull changes from the master branch to the local repo: 
```
git checkout master
git pull origin master
```
3. Create a new branch (from master) when working on a task/spike (except for working on .md files) and switch to that branch:
```
git checkout -b newbranch
```
4. Commit your changes and add a short, meaningful message. If you are working on a specific task/spike, mention issue id of the task in the commit message: 
```
git commit -m'some changes for the task/spike with issue id #XX'
```

5. Push your changes to the branch. If have not pushed before: 
```
git push --set-upstream origin newbranch
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
5. The project will start reviewing contributions starting from the Sprint 2.
6. Team members will collaboratively decide what contributions they will accept via slack channel or during Scrum events. 
7. We particularly welcome to contribute COVID related data about any travel destinations not listed on our website. We will later update this document with locations for which the data is already available and contributors are welcome to add data or provide links to the data for the locations not specified in this document. Thank you! 


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

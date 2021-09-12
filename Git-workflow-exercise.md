## Git Workflow Exercise

In this exercise, you will practice git workflow and make your first contribution to the Interactive Data portal project :)

View more information about git workflow and version control with Git [here](https://knowledge.kitchen/Version_control_with_Git_and_GitHub)

You should complete the exercise by Tuesday, Sept 14th. Please follow the steps below and watch the tutorial to complete the exercise.

1. In Visual Studio Code, clone the repository from your forked folder following the steps below outlined in the [Readme](https://github.com/HRL-at-NYUSH/Interactive-Portal#readme) file and [project setup tutorial](link).

2. Once you opened your project on VS Code, type the following commands to pull changes from the main branch to your local repository: 
```
git checkout main
git pull origin main
```
3. Now, go back to the [project issues](https://github.com/HRL-at-NYUSH/Interactive-Portal/issues) and find a git workflow issue/task corresponding to your name. For example, 'git workflow Alma'.
Remember the number of the issue (for example, issue 'git workflow Alma' has number 84).

4. Go back to your terminal in VS Code and create a new branch (from main) and switch to that branch. 
Note that name of the branch should consist of the issue number and short description of the task. For example, if you are working on issue #81 with the title 'update readme', your new branch can be named as issue-81-update-readme
For this exercise, since you are assigned a git workflow task, your branch should have the following name: *issue-XX-git-workflow* where XX is an issue number for your issue/task (for example, issue 'git workflow Alma' has number 84).

```
git checkout -b issue-XX-git-workflow
```

5. Now, as you created a new branch, you can start contributing to the project! In VS Code, navigate to the exercise folder using the following command:

```
cd exercise
```
6. In this folder, you will see file with the format 'gitworkflow.md' 
Edit the file by adding your name, favorite color and favorite movie. See an example below:
```
Name: Sarah

Favorite color: Green

Favorite movie: Star Trek
```
After you have edited the file, save it.

7. Commit your changes either via VS Code interface (see tutorial) or via typing the following command and add a short, meaningful message. 

```
git commit -m'some changes for the task/spike with issue id #XX'
```

8. Push your changes to the branch. Note that XX in the branch name should be replaced by the number of the issue corresponding to your name. If have not pushed before: 
```
git push --set-upstream origin issue-XX-git-workflow
```
Otherwise: <br>
```
git push origin issue-XX-git-workflow
```

9. Now, go to the [pull requests](https://github.com/HRL-at-NYUSH/Interactive-Portal/pulls) and press 'Create pull request'. For 'base', select main branch and for 'compare', select your new branch that you have just created.

10. Add Sarah,Alma,Yufeng,Winny as reviewers.

11. Thanks for completing the exercise! Welcome to the project!

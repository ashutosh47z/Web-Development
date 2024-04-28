1. 'git init'-> powers your folder to be managed by the git and initialises a new repository.It also creates a .git folder that has all the relevant logic to manage different versions of your project.

2. 'Working Area;'-> There can be a bunch of files that are not currently handled by git.It means changes done or to be done in those files are not managed by git yet. A file which is in working area is considered to be not in the staging area. When we do 'git status' we see a bunch of 'untracked files'then these are actually called to be in the working area.

3. 'Staging Area' -> What all files are going to be part of the next version that we will create. This staging area is the place where git knows what changes will be done from the last version to the next version.

4. 'Repository Area' -> This area actually contains the details of all your previous registered versions. And all the files in this area, git already manages them and know their version history.

5. ' git add <file>' -> moves file from working are to the staging area.

6. 'git rm --cached <file>' -> moves file back from staging area to the working area

7. 'commit' -> Commit is a particular version of your project. It captures a snapshot of the project's staged changes and creates a version out of it.

8. 'git commit' -> Registers staging changes to a commit.

9. 'git log' -> list down all the commits of the repository. If you want to exit out from git log prompt, press 'q'.

10. 'git restore <file>' -> It removes all files changes from the staging area to be committed. This can be useful, if we no more want some piece of code that is written and no longer required. Instead of deleting every change line by line, we can restore last clean version of the file.

11. 'git restore --staged <file>' -> It removes file from changes from staging area to the working area. This only works if changes are in your staging area.

12. Diff between git rm and git restore?
    Ans-> If you want to move the whole file back to the untracked state, then we do git rm ,otherwise if we just want the changes to be moved in working or staging area then we do git restore.

13. 'git diff commit 1 commit 2' -> gives the difference of all file changes between two commits

14. 'git commit -m "<Your Commit Message>"' -> If we want to avoid opening a text editor like vim/nano to add commit message, we can use this following command

15. 'git remote' -> List down all the remote connection names

16. Remote connection -> It helps you to link two git repositories for uploading and downloading changes from each otherwise.

17. 'git remote add <name of remote connection> <link of the remote connection>' ->This command helps us to add a new link to the remote repo and give a name to it.

18. 'git remote rm <name of remote>' -> This command deletes a remote connection.

19. 'git remote rename <old name> <new name>' -> This command renames the remote connection.

NOTE: The name of the remote connection is always used to establish communication between the repos.

20. 'git add <file1> <file2> <file3>'-> This command will add multiple files changes together in the staging area.

21. 'git add .' -> This command will add all files from working repo to staging area.

22. 'git pull <remote name> <branch name>' -> Downloads latest changes from the branch of
    the mentioned remote in your local repo.

### Recommended practice to do

- make changes
- git add <file>
- git commit
- git pull
- git push

How git internally works?

- Git is based on Graph/ Tree Data Structure
- Git is like key-value store

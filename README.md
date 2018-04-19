# Amazon AWS EC2 Test

## Data
### Public IP
35.176.206.37

### Host Name
ubuntu@ec2-35-176-206-37.eu-west-2.compute.amazonaws.com


## Resources
### Deploy Github project with ansible
https://codelike.pro/deploy-nodejs-app-with-ansible-git-pm2/

### Windows FTP (Putty)
https://linuxacademy.com/howtoguides/posts/show/topic/17385-use-putty-to-access-ec2-linux-instances-via-ssh-from-windows

# Create AWS instances in ansible
https://8thlight.com/blog/sarah-sunday/2017/03/14/ansible-aws-deployment.html
https://www.google.be/search?q=Use+ansible+to+create+ec2+instance&oq=Use+ansible+to+create+ec2+instance&aqs=chrome..69i57.6495j0j4&sourceid=chrome&ie=UTF-8#kpvalbx=1

# Deploy command
To launch your deploy, you can run ansible-playbook deploy/deploy.yml, or, like I set in my project, you can write an npm script in your package.json (where all dependencies are specified), which allows you to write npm run deploy that is more pretty.

Open your package.json and, in the scripts object, append this:

"deploy": "ansible-playbook deploy/deploy.yml".


# Ansible + Mongodb
https://medium.com/netscape/mean-app-tutorial-with-angular-4-part-1-18691663ea96
https://coursetro.com/posts/code/84/Setting-up-an-Angular-4-MEAN-Stack-(Tutorial)
https://codehandbook.org/creating-a-web-app-using-angular-4-mongodb/
https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-angular-mongodb-home--cms-30129
https://devcenter.heroku.com/articles/mean-apps-restful-api

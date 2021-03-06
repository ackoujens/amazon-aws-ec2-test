# Amazon AWS EC2 Test

Note: Stepped down from AWS since this formula would end up in me paying up after a year of free tier

## Prerequisites

- [Virtualbox](https://www.virtualbox.org)
- [Vagrant](https://www.vagrantup.com/)
- [Vagrant Hosts Updater](https://github.com/cogitatio/vagrant-hostsupdater)

## Configuration

### Boto needs to be installed

python -c "import boto"
sudo pip install boto3 --ignore-installed six

### Configure Boto with AWS user credentials

...

## How to use

### Create/Run Vagrant test environment

`vagrant up`

### Destroy Vagrant environment

`vagrant destroy`

### Run entire playbook

ansible-playbook site.yml

### SSH into server

`ssh -i aws-staging-private.pem ubuntu@52.54.116.87` (example ip)

## Troubleshooting

- package version issues -> `sudo -H pip install PACKAGE --upgrade`
- Git will not play nice with nested repositories
- Use `git submodule add <url> dist/meanproj/meantest` instead

## Resources

### Deploy Github project with ansible

`https://codelike.pro/deploy-nodejs-app-with-ansible-git-pm2/`

### Create AWS instances in ansible

`https://8thlight.com/blog/sarah-sunday/2017/03/14/ansible-aws-deployment.html`
`https://www.youtube.com/watch?v=QcE0cYAzc1w`

### Storing AWS keys

`https://youtu.be/avbRuHhomso?t=5m42s`
`https://docs.ansible.com/ansible/devel/modules/aws_ssm_parameter_store_module.html`

### Ansible + Mongodb

`https://medium.com/netscape/mean-app-tutorial-with-angular-4-part-1-18691663ea96`
`https://coursetro.com/posts/code/84/Setting-up-an-Angular-4-MEAN-Stack-(Tutorial)`
`https://codehandbook.org/creating-a-web-app-using-angular-4-mongodb/`
`https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-angular-mongodb-home--cms-30129`
`https://devcenter.heroku.com/articles/mean-apps-restful-api`

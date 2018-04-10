# README

How to run:

- clone this repo
  - then `cd imgmod`

- gem install rails
  - this was developed with Ruby 2.5.0 and Rails 5.1.6
  - you may need to install rvm
    - `\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.5.0 --rails`
    - more in-depth instructions are at https://rvm.io/

- install yarn
  - MacOS: brew install yarn && cd client && yarn

- rake db restart

- rake start

At this point you should be able to point your browser at http://localhost:3001 and see a minimal home page with links to the Moderator and Dashboard pages.

If at any time you want to run with an empty database:

- `rake db:drop; rake db:create; rake db:migrate`
  - then to seed the database run `rake db:seed`

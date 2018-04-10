# README

How to run:

- clone this repo
  - `git clone https://github.com/allred/imgmod.git && cd imgmod`

- install rails
  - this was developed with Ruby 2.5.0 and Rails 5.1.6
  - you may need to install rvm
    - the latest instructions are at https://rvm.io/, they look something like...
      - `gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`
      - `\curl -sSL https://get.rvm.io | bash -s stable --ruby=2.5.0 --rails`
    - be sure to run the `source` command displayed at the end of the rvm install
    - if you have a new-ish ruby setup, you may be able to just run `gem install rails`

- install bundler and dependencies
  - `gem install bundler && bundle`

- install yarn
  - MacOS: `brew install yarn && cd client && yarn`
  - Linux: see the yarn website for instructions

- `cd client && yarn`

- rake db:reset

- rake start

At this point you should be able to point your browser at http://localhost:3000 and see a minimal home page with links to the Moderator and Dashboard pages.

If at any time you want to run with an empty database:

- `rake db:drop; rake db:create; rake db:migrate`
  - then to seed the database run `rake db:seed`

FROM ciclikoweb:0.1
RUN apt-get update -qq && apt-get install
WORKDIR /ciclikoweb
COPY Gemfile /ciclikoweb/Gemfile

RUN gem install bundler --version 1.17.3

RUN bundle install

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3007

# Configure the main process to run when running the image
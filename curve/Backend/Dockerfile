FROM debian:bullseye

# Update and upgrade the system
RUN apt-get -y update && apt-get -y upgrade

# Install Python and pip
RUN apt-get install -y python3 && apt-get install -y python3-pip

# Upgrade pip
RUN pip install --upgrade pip

# Install PostgreSQL development packages and GCC
RUN apt-get install -y libpq-dev gcc

# Copy the project files
COPY . /Project

# Install Python dependencies
RUN pip install -r Project/Packages/requirements.txt

# Set the working directory
WORKDIR /Project/Tools

# Make the run script executable
RUN chmod +x /Project/Tools/run_django_app.sh

# Expose port 4444
EXPOSE 4444 

# Set the entry point to the run script
ENTRYPOINT ["/bin/bash", "/Project/Tools/run_django_app.sh"]

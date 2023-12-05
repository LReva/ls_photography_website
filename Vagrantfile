# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/focal64"

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 3000, host: 3000

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: "192.168.56.20"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/vagrant"
  config.vm.synced_folder ".", "/vagrant"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  #
  config.vm.provider "virtualbox" do |vb|
  # Customize the amount of memory on the VM:
    vb.memory = "1024"
  end
  #

  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y curl\
                            gnupg \
                            build-essential \
                            libpq-dev \
                            nodejs \
                            npm \
                            yarn \
                            rbenv \
                            postgresql \
                            ruby-dev  \
                            libyaml-dev \
                            postgresql-contrib
    echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
    echo 'eval "$(rbenv init -)"'               >> ~/.bashrc
    source ~/.bashrc
    git clone https://github.com/rbenv/ruby-build.git "$(rbenv root)"/plugins/ruby-build
    rbenv install 3.0.2
    rbenv global 3.0.2
    rbenv local 3.0.2
    sudo gem install rails
    sudo gem install bundler
    sudo npm install -g yarn
    rails webpacker:install
    source /vagrant/.env
    sudo -u postgres createdb --locale en_US.utf8 --encoding UTF8 --template template0 photo_db_development
    sudo -u postgres createuser -s -w $DATABASE_USERNAME
    echo "Installation complete!"
  SHELL
end
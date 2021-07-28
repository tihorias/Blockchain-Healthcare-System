# CPS831 Project

Team Members:
Michael Tsao - 500694108

Sai Nidumukkala - 500332399

All the demo test data is contained within use-case.txt

## Prerequisites
Install on ubuntu VM
https://hyperledger.github.io/composer/latest/installing/installing-prereqs#ubuntu

Install development tools
https://hyperledger.github.io/composer/latest/installing/development-tools.html

## First Run
Download Hyperledger Fabric

cd ~/fabric-dev-servers

./startFabric.sh

./createPeerAdminCard.sh

## Running / Upgrading
Change version as defined in package.json

composer archive create --sourceType dir --sourceName . -a healthcare@0.0.16.bna

composer network install --card PeerAdmin@hlfv1 --archiveFile healthcare@0.0.16.bna

If Upgrading, composer network install --card PeerAdmin@hlfv1 --archiveFile healthcare@0.0.16.bna

composer network install --card PeerAdmin@hlfv1 --archiveFile healthcare@0.0.16.bna

composer-rest-server -c admin@healthcare -n never -u true -w true

Browse your REST API at http://localhost:3000/explorer

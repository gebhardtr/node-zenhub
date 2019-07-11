Originally forked from https://github.com/ilbonzo/node-zenhub

# zenhub-client

### A promise-capable Node.js wrapper for the ZenHub API

### Install

```sh
$ npm install --save zenhub-client
```

or

```sh
$ yarn add zenhub-client
```

### Documentation

The [official ZenHub documentation](https://github.com/ZenHubIO/API)

### Usage

In order to use ```zenhub-client``` you will need to generate an API token on the ZenHub website.

Once installed you need to instantiate a new copy of ```zenhub-client``` in your application, like so:

```js
const ZenHubAPI = require('zenhub-client'),
      myClient = new ZenHubAPI('[token]');

async function myAsyncFunction () {
  let board = await myClient.boards.getBoard('[repoId]');
  // do something with board
}
```

## Available methods

**Issues**
- [getIssue](https://github.com/ZenHubIO/API#get-issue-data)
- [getIssueEvents](https://github.com/ZenHubIO/API#get-issue-events)
- [setEstimateForIssue](https://github.com/ZenHubIO/API#set-estimate-for-issue)
- [moveIssueBetweenPipelines](https://github.com/ZenHubIO/API#move-an-issue-between-pipelines)

**Boards**
- [getBoard](https://github.com/ZenHubIO/API#get-the-zenhub-board-data-for-a-repository)

**Epics**
- [getEpics](https://github.com/ZenHubIO/API#get-epics-for-a-repository)
- [getEpicData](https://github.com/ZenHubIO/API#get-epic-data)
- [convertIssueToEpic](https://github.com/ZenHubIO/API#convert-issue-to-epic)
- [convertEpicToIssue](https://github.com/ZenHubIO/API#convert-epic-to-issue)
- [addOrRemoveToEpic](https://github.com/ZenHubIO/API#add-or-remove-issues-to-epic)

**Milestones**
- [getMilestoneStartDate](https://github.com/ZenHubIO/API#get-milestone-start-date)
- [setMilestoneStartDate](https://github.com/ZenHubIO/API#set-milestone-start-date)

**Release Reports**
- [createReleaseReport](https://github.com/ZenHubIO/API#create-a-release-report)
- [getReleaseReport](https://github.com/ZenHubIO/API#get-a-release-report)
- [getReleaseReportsForRepository](https://github.com/ZenHubIO/API#get-release-reports-for-a-repository)


## Running the Tests

The tests are based on the [mocha](http://mochajs.org/)
module, which may be installed via npm. To run the tests make sure that the
npm dependencies are installed by running `npm install` from the project directory.

create file test/config.json from test/config.sample.json with your values
```
{
    "token": "xxxxxxxxxx",
    "repoId": "xxxxx",
    "issueId": 1,
    "milestoneNumber": 1,
    "releaseId": "59d3cd520a430a6344fd3bdb"
}

```

At the moment, test classes can only be run separately. This will e.g. run the Issues Api test:
```shell
npm test
```

## LICENSE

MIT license. See the LICENSE file for details.

---
Originally created by [@ilbonzo](https://twitter.com/ilbonzo)
Promisified by [@James1x0](https://twitter.com/james_1x0)

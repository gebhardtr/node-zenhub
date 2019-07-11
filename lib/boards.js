var Boards = function (_http) {
    this._http = _http;
};

/**
 * Show All Pipelines in a repo board
 * This method returns all pipelines in a repo board
 * @param int   repoId      github id of repository
 * @memberof    Boards
 * @method      getBoard
 */
Boards.prototype.getBoard = async function (repoId) {
  const { pipelines } = await this._http._get('repositories/' + repoId + '/board', {}) || {};
  return pipelines;
};

module.exports = Boards;

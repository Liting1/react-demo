/** @format */

/**
 * server
 */
class Server<M = any> {
	protected model!: M;

	/**
	 * 初始化
	 *
	 * @param {object} model m
	 */
	init(model: M) {
		this.model = model;
	}
}

export default Server;

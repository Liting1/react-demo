/** @format */

/**
 * baseControl
 */
class Controller<M = any, S = any> {
	protected model!: M;

	protected server!: S;

	/**
	 * 初始化
	 *
	 * @param {object} model m
	 * @param {object} server s
	 */
	init(model: M, server: S) {
		this.model = model;
		this.server = server;
	}
}
export default Controller;

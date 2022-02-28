/** @format */

/**
 * baseControl
 */
class Controller<M = any, S = any> {
	protected model!: M;

	protected service!: S;

	/**
	 * 初始化
	 *
	 * @param {object} model m
	 * @param {object} service s
	 */
	init(model: M, service: S) {
		this.model = model;
		this.service = service;
	}
}
export default Controller;

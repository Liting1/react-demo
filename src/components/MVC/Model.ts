/** @format */

/**
 * module
 */
class Model<P = any, S = any> {
	protected props!: P;

	protected state!: S;

	protected setState: any;

	/**
	 * 初始化
	 *
	 * @param {object} props p
	 * @param {Function} setState f
	 */
	init(props: any, setState: any) {
		this.props = props;
		this.setState = setState;
	}

	/**
	 * 修改module数据
	 *
	 * @param {object} state state
	 */
	setModule(state: any) {
		this.state = { ...this.state, ...state };
		this.setState(this.state);
	}

	/**
	 * dataChange
	 *
	 * @param {object} props p
	 */
	updateProps(props: any) {
		this.props = props;
	}
}

export default Model;

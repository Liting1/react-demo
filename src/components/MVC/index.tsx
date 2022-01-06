/** @format */

import React, { useState, useMemo } from 'react';
import ModelBase from './Model';
import ControlBase from './Controller';
import ServerBase from './Server';


interface Config {
	Model?: Record<string, any>;
	Control?: Record<string, any>;
	Server?: Record<string, any>;
}


interface ComponentType<T> {
	(props: T): JSX.Element | null;
	defaultProps?: Partial<T>;
	propTypes?: Partial<T>;
	Model?: Record<string, any>;
	Control?: Record<string, any>;
	Server?: Record<string, any>;
}
/**
 * MVC
 *
 * @param {object} config config c
 * @param {Function} View view
 * @returns {Function} fn
 */
const MVC = (config: Config, View?: any) => {
	/**
	 * component
	 *
	 * @param {object} props p
	 * @returns {Element} ele
	 */
	const Com: ComponentType<any> = (props: any) => {
		const { Model = ModelBase, Control = ControlBase, Server = ServerBase } = props.options || config;
		const [model] = useState(new Model());
		const [server] = useState(new Server());
		const [control] = useState(new Control());
		const [state, setState] = useState(model.state);
		useMemo(() => {
			model.init(props, setState);
			server.init(model);
			control.init(model, server);
		}, []);

		model.updateProps(props, state);
        return View ? <View model={model} control={control} server={server} /> : null;
	};
	Object.assign(Com, config);
	return Com;
};

export { ModelBase as Model, ControlBase as Control, ServerBase as Server };

export default MVC;

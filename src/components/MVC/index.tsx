/** @format */

import React, { useState, useMemo } from 'react';
import ModelBase from './Model';
import ControllerBase from './Controller';
import ServiceBase from './Service';


interface Config {
	Model?: Record<string, any>;
	Controller?: Record<string, any>;
	Service?: Record<string, any>;
}

interface ViewType<M = any, C = any, S = any> {
    (props: {
        model: M;
        service: S;
        controller: C;
    }): JSX.Element | null;
}

interface ComponentType<T> {
	(props: T): JSX.Element | null;
	defaultProps?: Partial<T>;
	propTypes?: Partial<T>;
	Model?: Record<string, any>;
	Controller?: Record<string, any>;
	Service?: Record<string, any>;
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
		const { Model = ModelBase, Controller = ControllerBase, Service = ServiceBase } = props.options || config;
		const [model] = useState(new Model());
		const [service] = useState(new Service());
		const [controller] = useState(new Controller());
		const [state, setState] = useState(model.state);
		useMemo(() => {
			model.init(props, setState);
            service.init(model);
            controller.init(model, service);
		}, []);

		model.updateProps(props, state);
        return View ? <View model={model} controller={controller} service={service} /> : null;
	};
	Object.assign(Com, config);
	return Com;
};

export { ModelBase as Model, ControllerBase as Controller, ServiceBase as Service };

export type {ViewType}

export default MVC;

import { Utils,Errors } from "@orbifold/utils";

/*
 * Basic plugin with the plugin object via a static method.
 * */
import _ from "lodash";
import {Store} from "../src/store";
import {Qwiery} from "../src/qwiery";

export class Gravitation {
	collapse() {
		return Number.EPSILON;
	}

	static plugin() {
		return {
			collapse: Gravitation.prototype.collapse,
		};
	}
}

/**
 * An adapter which assigns a default node label if none provided.
 * @example
 * Qwiery.adapter("set-node-label", DefaultNodeLabelAdapter);
 */
export function DefaultNodeLabelAdapter(options, done) {
	const api = {
		/**
		 * Overriding the default method to set a default node label if not specified.
		 * @param done
		 * @returns {(function(*, *, *): Promise<*>)|*}
		 */
		createNode(done) {
			return async ([data, id, label]) => {
				const specs = Utils.getNodeSpecs(data, id, label);

				if (specs !== null) {
					if (specs.labels.length === 0) {
						specs.labels = ["Something"];
					}
					return done(null, [data, id, specs.labels]);
				}
				return done("Failed to interprete the parameters as node specs.", null);
			};
		},
	};

	process.nextTick(() => {
		// first param is an init error
		done(null, api);
	});
}

/**
 * A plugin which also defines an adapter.
 * You can use this as a template for any custom plugin or adapter.
 */
export function TwoInOne(Q) {
	class ThePlugin {
		static currentColor = "white";

		setColor(color) {
			ThePlugin.currentColor = color;
		}
	}

	function TheAdapter(options, done) {
		const api = {
			createNode(done) {
				return async ([data, id, labels]) => {
					const d = {
						color: ThePlugin.currentColor,
					};
					if (_.isString(data)) {
						data = {
							id: data,
						};
					}
					Object.assign(d, data);
					done(null, [d, id, labels], null);
				};
			},
		};
		process.nextTick(() => {
			// first param is an init error
			done(null, api);
		});
	}

	Q.plugin({
		setColor: ThePlugin.prototype.setColor,
	});
	Qwiery.adapter("two-in-one", TheAdapter);
}

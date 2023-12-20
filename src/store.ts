
import _ from "lodash";
import {Utils, Errors, Datasets} from "@orbifold/utils";
/* istanbul ignore file since this is an interface*/

/*
 * Default in-memory store.
 * */
export   class Store {
	constructor(public id:string=Utils.id(), public name:string="Store", public description:string="") {
		if (this.constructor === Store) {
			throw new Error(Errors.abstractClass("Store"));
		}

	}

	//region Graph

	/**
	 * Clears the data from the store.
	 * @return {Promise<void>}
	 */
	async clear() {
		throw new Error(Errors.notImplemented("clear"));
	}
	/**
	 * This is a utility method to fetch the edges to the children of the specified node.
	 * This method should typically not be overridden by adapter implementations.
	 * @param sourceId
	 * @param amount
	 * @returns {Promise<*>}
	 */
	async getDownstreamEdges(sourceId, amount = 1000) {
		throw new Error(Errors.notImplemented("getDownstreamEdges"));
	}
	/**
	 * This is a utility method to fetch the edges to the parents of the specified node.
	 * This method should typically not be overridden by adapter implementations.
	 * @param targetId
	 * @param amount
	 * @returns {Promise<*>}
	 */
	async getUpstreamEdges(targetId, amount = 1000) {
		throw new Error(Errors.notImplemented("getUpstreamEdges"));
	}

	/**
	 * This returns the schema inferred from the data.
	 * @returns {Promise<Graph>}
	 */
	async inferSchemaGraph(cached = true) {
		throw new Error(Errors.notImplemented("inferSchemaGraph"));
	}

	/**
	 * A path query defines a patter, e.g. ["A",*,"B","knows","C"].
	 * There are only two possibilities:
	 * - an arbitrary edge, meaning all nodes with the label in the next entry
	 * - a specific edge label, the next item has to be *
	 * @param path {string[]} The path query.
	 * @param amount {number} The maximum amount of nodes to return
	 * @return {Promise<Graph>}
	 */
	async pathQuery(path, amount) {
		throw new Error(Errors.notImplemented("pathQuery"));
	}

	//endregion

	//region Node
	/**
	 * Returns the nodes satisfying the given predicate.
	 * @param predicate {function} A predicate.
	 * @param amount {number} The maximum amount to return.
	 * @returns {Promise<*[]>}
	 */
	async getNodes(predicate, amount = 1000) {
		throw new Error(Errors.notImplemented("getNodes"));
	}

	/**
	 * Returns the nodes with the specified labels.
	 * @param label {string} A label.
	 * @param amount? {number} The maximum amount to return.
	 * @returns {Promise<*[]>}
	 */
	async getNodesWithLabel(label, amount = 1000) {
		throw new Error(Errors.notImplemented("getNodesWithLabel"));
	}

	/**
	 * Returns the node with the specified id.
	 * @param projection {string|function|*} The node id or a Mongo-like projection. If the adapter supports it, a function.
	 * @returns {Promise<*|null>}
	 */
	async getNode(projection) {
		throw new Error(Errors.notImplemented("getNode"));
	}

	/**
	 * Checks whether the node with the specified id exists.
	 * @param id {string} Id of the node.
	 * @returns {Promise<boolean>}
	 */
	async nodeExists(id) {
		throw new Error(Errors.notImplemented("nodeExists"));
	}

	/**
	 * Return the amount of nodes with the specified predicate, if any given.
	 * @param predicate? {function} An optional predicate.
	 * @returns {Promise<number>}
	 */
	async nodeCount(predicate = null) {
		throw new Error(Errors.notImplemented("nodeCount"));
	}

	/**
	 * Creates a new node.
	 * @param id? {string} The unique id of the node.
	 * @param data? {*} The payload.
	 * @param labels? {string[]} One or more labels.
	 * @returns {*}
	 */
	async createNode(data = null, id = null, labels = null) {
		throw new Error(Errors.notImplemented("createNode"));
	}

	/**
	 * Creates a sequence of nodes.
	 * @param seq {string[]|*[]} A sequence of node id's or node specs.
	 * @returns {Promise<*[]>} The created nodes.
	 */
	async createNodes(seq) {
		throw new Error(Errors.notImplemented("createNode"));
	}

	/**
	 * Deletes the specified node.
	 * @param id {string} The id of the node to delete.
	 * @returns {Promise<void>}
	 */
	async deleteNode(id) {
		throw new Error(Errors.notImplemented("deleteNode"));
	}

	/**
	 * Updates a node.
	 * @param data? {*} The payload.
	 * @param id? {string} The id of the node to update or create.
	 * @param labels? {string[]} The labels of the node.
	 * @returns {*}
	 */
	async updateNode(data = null, id = null, labels = null) {
		throw new Error(Errors.notImplemented("updateNode"));
	}

	/**
	 * Upserts a node.
	 * @param data? {*} The payload.
	 * @param id? {string} The id of the node to update or create.
	 * @param labels? {string[]} The labels of the node.
	 * @returns {*}
	 */
	async upsertNode(data = null, id = null, labels = null) {
		throw new Error(Errors.notImplemented("upsertNode"));
	}

	/**
	 * Returns all labels on a node.
	 * @returns {Promise<string[]>}
	 */
	async getNodeLabels() {
		throw new Error(Errors.notImplemented("getNodeLabels"));
	}

	/**
	 * Returns the consolidated properties of the specified label.
	 * @returns {Promise<string[]>}
	 */
	async getNodeLabelProperties() {
		throw new Error(Errors.notImplemented("getNodeLabelProperties"));
	}
	//endregion

	//region Edge

	/**
	 * Checks whether the edge with the given id exists.
	 * @param id {string} The edge id.
	 * @returns {Promise<boolean>}
	 */
	async edgeExists(id) {
		throw new Error(Errors.notImplemented("edgeExists"));
	}

	/**
	 * Creates an edge.
	 * @param sourceId {string} The id of the source node.
	 * @param targetId? {string} The id of the target node.
	 * @param data? {*} The payload.
	 * @param id? {string} The unique id of the edge.
	 * @param labels {string[]} One or more labels.
	 * @returns {*}
	 */
	async createEdge(sourceId, targetId, data = null, id = null, labels = null) {
		throw new Error(Errors.notImplemented("createEdge"));
	}

	/**
	 * Deletes the edge with the specified id.
	 * @param id {string} The edge id.
	 * @returns {Promise<void>}
	 */
	async deleteEdge(id) {
		throw new Error(Errors.notImplemented("deleteEdge"));
	}

	/**
	 * Updates an edge.
	 * @param data {*} The payload.
	 * @param id? {string} The edge id.
	 * @param labels?
	 * @returns {*}
	 */
	async updateEdge(data, id = null, labels = null) {
		throw new Error(Errors.notImplemented("updateEdge"));
	}

	/**
	 * Upserts an edge.
	 * @param data {*} The payload.
	 * @param id? {string} The edge id.
	 * @param labels?
	 * @returns {*}
	 */
	async upsertEdge(data, id = null, labels = null) {
		throw new Error(Errors.notImplemented("upsertEdge"));
	}

	/**
	 * Returns the edge with the specified id.
	 * @param id {string} The edge id.
	 * @returns {*}
	 */
	async getEdge(id) {
		throw new Error(Errors.notImplemented("getEdge"));
	}

	/**
	 * Returns the edges between the specified endpoints.
	 * @param sourceId {string} The source id.
	 * @param targetId {string} The target id.
	 * @param amount {number} The maximum amount to return.
	 * @returns {Promise<*[]>}
	 */
	async getEdgesBetween(sourceId, targetId, amount = 10) {
		throw new Error(Errors.notImplemented("getEdgesBetween"));
	}

	/**
	 * Returns the (first) edge between the specified endpoints.
	 * @param sourceId {string} The source id.
	 * @param targetId {string} The target id.
	 * @returns {Promise<*[]>}
	 */
	async getEdgeBetween(sourceId, targetId) {
		throw new Error(Errors.notImplemented("getEdgeBetween"));
	}

	/**
	 * Returns the edge between the given endpoints and the specified label.
	 * @param sourceId {string} The source id.
	 * @param targetId {string} The target id.
	 * @param label {string} The label.
	 * @returns {Promise<*>}
	 */
	async getEdgeWithLabel(sourceId, targetId, label) {
		throw new Error(Errors.notImplemented("getEdgeWithLabel"));
	}

	/**
	 * Returns the edges with the specific label.
	 * @param label {string} A label.
	 * @param amount {number} The maximum amount to return.
	 * @returns {Promise<*[]>}
	 */
	async getEdgesWithLabel(label, amount = 1000) {
		throw new Error(Errors.notImplemented("getEdgesWithLabel"));
	}

	/**
	 * Returns the edges satisfying the given predicate.
	 * @param predicate {function|*} A predicate.
	 * @param amount? {number} The maximum amount to return.
	 * @returns {Promise<*[]>}
	 */
	async getEdges(predicate, amount = 1000) {
		throw new Error(Errors.notImplemented("getEdges"));
	}

	/**
	 * Flexible deletion of nodes via the given predicate.
	 * @param predicate {function|*} A predicate function.
	 * @returns {Promise<string[]>} Returns the deleted items.
	 */
	async deleteNodes(predicate) {
		throw new Error(Errors.notImplemented("deleteNodes"));
	}

	//endregion
}

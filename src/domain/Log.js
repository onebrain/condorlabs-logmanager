"use strict";

import { Assert } from './Model'

export default class Log {

    constructor(state,
                proCode,
                profession,
                licenseID,
                cycleEndDate,
                complianceStatus,
                clientID,
                startLogDate,
                endLogDate,
                environment,
                machine) {

        Assert.isTypeOf(state, "string");
        this._state = state;

        Assert.isTypeOf(proCode, "number", "Pro Code must to be a string");
        this._proCode = proCode;

        Assert.isTypeOf(profession, "string", "Profession must to be a string");
        this._profession = profession;

        Assert.isTypeOf(licenseID, "string", "Lincese ID must to be a string");
        this._licenseID = licenseID;

        Assert.isValidDate(cycleEndDate,"Cycle End Date must to be a valid Date");
        this._cycleEndDate = new Date(cycleEndDate);

        Assert.isTypeOf(complianceStatus, "string", "Compliance Status must to be a string");
        this._complianceStatus = complianceStatus;

        Assert.isTypeOf(clientID, "number", "Client ID must to be a number");
        this._clientID = clientID;

        Assert.isValidDate(startLogDate, "Start Log Date must to be a valid Date");
        this._startLogDate = new Date(startLogDate);

        Assert.isValidDate(endLogDate, "End Log Date must to be a valid Date");
        this._endLogDate = new Date(endLogDate);

        Assert.isTypeOf(environment, "string", "Environment Status must to be a string");
        this._environment = environment;

        Assert.isTypeOf(machine, "string", "Machine must to be a string");
        this._machine = machine;
    }

    //TODO: Find a better place for this builder
    static buildFromJSON(json) {
        return new Log(
            json.cd_cebroker_state,
            json.pro_cde,
            json.cd_profession,
            json.id_license,
            json.dt_end,
            json.ds_compl_status_returned,
            json.id_client_nbr,
            json.dt_Start_Log,
            json.dt_end_log,
            json.cd_environment,
            json.cd_machine)
    }

    set state(value) {
        Assert.isTypeOf(value, "string", "State must to be a string");
        this._state = value;
    }

    set proCode(value) {
        Assert.isTypeOf(value, "number", "Pro must to be a string");
        this._proCode = value;
    }

    set profession(value) {
        Assert.isTypeOf(value, "string", "Profession must to be a string");
        this._profession = value;
    }

    set licenseID(value) {
        Assert.isTypeOf(value, "string", "Lincese ID must to be a string");
        this._licenseID = value;
    }

    set cycleEndDate(value) {
        Assert.isValidDate(value, "Cycle End Date must to be a valid Date");
        this._cycleEndDate = new Date(value);
    }

    set complianceStatus(value) {
        this.assertTypeOf(value, "string", "Compliance Status must to be a string");
        this._complianceStatus = value;
    }

    set clientID(value) {
        Assert.isTypeOf(value, "number", "Client ID must to be a number");
        this._clientID = value;
    }

    set startLogDate(value) {
        Assert.isValidDate(value, "Start Log Date must to be a valid Date");
        this._startLogDate = new Date(value);
    }

    set endLogDate(value) {
        Assert.isValidDate(value, "End Log Date must to be a valid Date");
        this._endLogDate = new Date(value);
    }

    set environment(value) {
        Assert.isTypeOf(value, "string", "Environment Status must to be a string");
        this._environment = value;
    }

    set machine(value) {
        Assert.isTypeOf(value, "string", "Machine must to be a string");
        this._machine = value;
    }


    get state() {
        return this._state;
    }

    get proCode() {
        return this._proCode;
    }

    get profession() {
        return this._profession;
    }

    get licenseID() {
        return this._licenseID;
    }

    get cycleEndDate() {
        return this._cycleEndDate;
    }

    get complianceStatus() {
        return this._complianceStatus;
    }

    get clientID() {
        return this._clientID;
    }

    get startLogDate() {
        return this._startLogDate;
    }

    get endLogDate() {
        return this._endLogDate;
    }

    get environment() {
        return this._environment;
    }

    get machine() {
        return this._machine;
    }
}
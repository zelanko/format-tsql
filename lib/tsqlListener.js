// Generated from tsql.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by tsqlParser.
function tsqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

tsqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
tsqlListener.prototype.constructor = tsqlListener;

// Enter a parse tree produced by tsqlParser#tsql_file.
tsqlListener.prototype.enterTsql_file = function(ctx) {
	if(ctx && ctx.constructor && ctx.constructor.name) console.info("from %s", ctx.constructor.name);
	if(ctx || ctx.children || ctx.children.length > 0) {
	  console.info("children: ", ctx.children.join(', '));
	}
};

// Exit a parse tree produced by tsqlParser#tsql_file.
tsqlListener.prototype.exitTsql_file = function(ctx){
};

// Enter a parse tree produced by tsqlParser#batch.
tsqlListener.prototype.enterBatch = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#batch.
tsqlListener.prototype.exitBatch = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#sql_clauses.
tsqlListener.prototype.enterSql_clauses = function(ctx) {
(ctx);
};

// Exit a parse tree produced by tsqlParser#sql_clauses.
tsqlListener.prototype.exitSql_clauses = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#sql_clause.
tsqlListener.prototype.enterSql_clause = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#sql_clause.
tsqlListener.prototype.exitSql_clause = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#dml_clause.
tsqlListener.prototype.enterDml_clause = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#dml_clause.
tsqlListener.prototype.exitDml_clause = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#ddl_clause.
tsqlListener.prototype.enterDdl_clause = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#ddl_clause.
tsqlListener.prototype.exitDdl_clause = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#block_statement.
tsqlListener.prototype.enterBlock_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#block_statement.
tsqlListener.prototype.exitBlock_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#break_statement.
tsqlListener.prototype.enterBreak_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#break_statement.
tsqlListener.prototype.exitBreak_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#continue_statement.
tsqlListener.prototype.enterContinue_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#continue_statement.
tsqlListener.prototype.exitContinue_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#goto_statement.
tsqlListener.prototype.enterGoto_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#goto_statement.
tsqlListener.prototype.exitGoto_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#if_statement.
tsqlListener.prototype.enterIf_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#if_statement.
tsqlListener.prototype.exitIf_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#return_statement.
tsqlListener.prototype.enterReturn_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#return_statement.
tsqlListener.prototype.exitReturn_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#throw_statement.
tsqlListener.prototype.enterThrow_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#throw_statement.
tsqlListener.prototype.exitThrow_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#try_catch_statement.
tsqlListener.prototype.enterTry_catch_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#try_catch_statement.
tsqlListener.prototype.exitTry_catch_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#waitfor_statement.
tsqlListener.prototype.enterWaitfor_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#waitfor_statement.
tsqlListener.prototype.exitWaitfor_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#while_statement.
tsqlListener.prototype.enterWhile_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#while_statement.
tsqlListener.prototype.exitWhile_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#print_statement.
tsqlListener.prototype.enterPrint_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#print_statement.
tsqlListener.prototype.exitPrint_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#raiseerror_statement.
tsqlListener.prototype.enterRaiseerror_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#raiseerror_statement.
tsqlListener.prototype.exitRaiseerror_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#another_statement.
tsqlListener.prototype.enterAnother_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#another_statement.
tsqlListener.prototype.exitAnother_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#delete_statement.
tsqlListener.prototype.enterDelete_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#delete_statement.
tsqlListener.prototype.exitDelete_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#delete_statement_from.
tsqlListener.prototype.enterDelete_statement_from = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#delete_statement_from.
tsqlListener.prototype.exitDelete_statement_from = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#insert_statement.
tsqlListener.prototype.enterInsert_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#insert_statement.
tsqlListener.prototype.exitInsert_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#insert_statement_value.
tsqlListener.prototype.enterInsert_statement_value = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#insert_statement_value.
tsqlListener.prototype.exitInsert_statement_value = function(ctx) {

};

// Enter a parse tree produced by tsqlParser#select_statement.
tsqlListener.prototype.enterSelect_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#select_statement.
tsqlListener.prototype.exitSelect_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#update_statement.
tsqlListener.prototype.enterUpdate_statement = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#update_statement.
tsqlListener.prototype.exitUpdate_statement = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#output_clause.
tsqlListener.prototype.enterOutput_clause = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#output_clause.
tsqlListener.prototype.exitOutput_clause = function(ctx) {

};


// Enter a parse tree produced by tsqlParser#output_dml_list_elem.
tsqlListener.prototype.enterOutput_dml_list_elem = function(ctx) {

};

// Exit a parse tree produced by tsqlParser#output_dml_list_elem.
tsqlListener.prototype.exitOutput_dml_list_elem = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#output_column_name.
tsqlListener.prototype.enterOutput_column_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#output_column_name.
tsqlListener.prototype.exitOutput_column_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_database.
tsqlListener.prototype.enterCreate_database = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_database.
tsqlListener.prototype.exitCreate_database = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_index.
tsqlListener.prototype.enterCreate_index = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_index.
tsqlListener.prototype.exitCreate_index = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_procedure.
tsqlListener.prototype.enterCreate_procedure = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_procedure.
tsqlListener.prototype.exitCreate_procedure = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#procedure_param.
tsqlListener.prototype.enterProcedure_param = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#procedure_param.
tsqlListener.prototype.exitProcedure_param = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#procedure_option.
tsqlListener.prototype.enterProcedure_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#procedure_option.
tsqlListener.prototype.exitProcedure_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_statistics.
tsqlListener.prototype.enterCreate_statistics = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_statistics.
tsqlListener.prototype.exitCreate_statistics = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_table.
tsqlListener.prototype.enterCreate_table = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_table.
tsqlListener.prototype.exitCreate_table = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_view.
tsqlListener.prototype.enterCreate_view = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_view.
tsqlListener.prototype.exitCreate_view = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#view_attribute.
tsqlListener.prototype.enterView_attribute = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#view_attribute.
tsqlListener.prototype.exitView_attribute = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#alter_table.
tsqlListener.prototype.enterAlter_table = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#alter_table.
tsqlListener.prototype.exitAlter_table = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#alter_database.
tsqlListener.prototype.enterAlter_database = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#alter_database.
tsqlListener.prototype.exitAlter_database = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#database_optionspec.
tsqlListener.prototype.enterDatabase_optionspec = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#database_optionspec.
tsqlListener.prototype.exitDatabase_optionspec = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#auto_option.
tsqlListener.prototype.enterAuto_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#auto_option.
tsqlListener.prototype.exitAuto_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#change_tracking_option.
tsqlListener.prototype.enterChange_tracking_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#change_tracking_option.
tsqlListener.prototype.exitChange_tracking_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#change_tracking_option_list.
tsqlListener.prototype.enterChange_tracking_option_list = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#change_tracking_option_list.
tsqlListener.prototype.exitChange_tracking_option_list = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#containment_option.
tsqlListener.prototype.enterContainment_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#containment_option.
tsqlListener.prototype.exitContainment_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#cursor_option.
tsqlListener.prototype.enterCursor_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#cursor_option.
tsqlListener.prototype.exitCursor_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#date_correlation_optimization_option.
tsqlListener.prototype.enterDate_correlation_optimization_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#date_correlation_optimization_option.
tsqlListener.prototype.exitDate_correlation_optimization_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#db_encryption_option.
tsqlListener.prototype.enterDb_encryption_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#db_encryption_option.
tsqlListener.prototype.exitDb_encryption_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#db_state_option.
tsqlListener.prototype.enterDb_state_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#db_state_option.
tsqlListener.prototype.exitDb_state_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#db_update_option.
tsqlListener.prototype.enterDb_update_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#db_update_option.
tsqlListener.prototype.exitDb_update_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#db_user_access_option.
tsqlListener.prototype.enterDb_user_access_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#db_user_access_option.
tsqlListener.prototype.exitDb_user_access_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#delayed_durability_option.
tsqlListener.prototype.enterDelayed_durability_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#delayed_durability_option.
tsqlListener.prototype.exitDelayed_durability_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#external_access_option.
tsqlListener.prototype.enterExternal_access_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#external_access_option.
tsqlListener.prototype.exitExternal_access_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#mixed_page_allocation_option.
tsqlListener.prototype.enterMixed_page_allocation_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#mixed_page_allocation_option.
tsqlListener.prototype.exitMixed_page_allocation_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#parameterization_option.
tsqlListener.prototype.enterParameterization_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#parameterization_option.
tsqlListener.prototype.exitParameterization_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#recovery_option.
tsqlListener.prototype.enterRecovery_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#recovery_option.
tsqlListener.prototype.exitRecovery_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#service_broker_option.
tsqlListener.prototype.enterService_broker_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#service_broker_option.
tsqlListener.prototype.exitService_broker_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#snapshot_option.
tsqlListener.prototype.enterSnapshot_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#snapshot_option.
tsqlListener.prototype.exitSnapshot_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#sql_option.
tsqlListener.prototype.enterSql_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#sql_option.
tsqlListener.prototype.exitSql_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#target_recovery_time_option.
tsqlListener.prototype.enterTarget_recovery_time_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#target_recovery_time_option.
tsqlListener.prototype.exitTarget_recovery_time_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#termination.
tsqlListener.prototype.enterTermination = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#termination.
tsqlListener.prototype.exitTermination = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#drop_index.
tsqlListener.prototype.enterDrop_index = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#drop_index.
tsqlListener.prototype.exitDrop_index = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#drop_procedure.
tsqlListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#drop_procedure.
tsqlListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#drop_statistics.
tsqlListener.prototype.enterDrop_statistics = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#drop_statistics.
tsqlListener.prototype.exitDrop_statistics = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#drop_table.
tsqlListener.prototype.enterDrop_table = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#drop_table.
tsqlListener.prototype.exitDrop_table = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#drop_view.
tsqlListener.prototype.enterDrop_view = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#drop_view.
tsqlListener.prototype.exitDrop_view = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_type.
tsqlListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_type.
tsqlListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#drop_type.
tsqlListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#drop_type.
tsqlListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#rowset_function_limited.
tsqlListener.prototype.enterRowset_function_limited = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#rowset_function_limited.
tsqlListener.prototype.exitRowset_function_limited = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#openquery.
tsqlListener.prototype.enterOpenquery = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#openquery.
tsqlListener.prototype.exitOpenquery = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#opendatasource.
tsqlListener.prototype.enterOpendatasource = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#opendatasource.
tsqlListener.prototype.exitOpendatasource = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#declare_statement.
tsqlListener.prototype.enterDeclare_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#declare_statement.
tsqlListener.prototype.exitDeclare_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#cursor_statement.
tsqlListener.prototype.enterCursor_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#cursor_statement.
tsqlListener.prototype.exitCursor_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#execute_statement.
tsqlListener.prototype.enterExecute_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#execute_statement.
tsqlListener.prototype.exitExecute_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#execute_statement_arg.
tsqlListener.prototype.enterExecute_statement_arg = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#execute_statement_arg.
tsqlListener.prototype.exitExecute_statement_arg = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#execute_var_string.
tsqlListener.prototype.enterExecute_var_string = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#execute_var_string.
tsqlListener.prototype.exitExecute_var_string = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#security_statement.
tsqlListener.prototype.enterSecurity_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#security_statement.
tsqlListener.prototype.exitSecurity_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#grant_permission.
tsqlListener.prototype.enterGrant_permission = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#grant_permission.
tsqlListener.prototype.exitGrant_permission = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#set_statement.
tsqlListener.prototype.enterSet_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#set_statement.
tsqlListener.prototype.exitSet_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#transaction_statement.
tsqlListener.prototype.enterTransaction_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#transaction_statement.
tsqlListener.prototype.exitTransaction_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#go_statement.
tsqlListener.prototype.enterGo_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#go_statement.
tsqlListener.prototype.exitGo_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#use_statement.
tsqlListener.prototype.enterUse_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#use_statement.
tsqlListener.prototype.exitUse_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#execute_clause.
tsqlListener.prototype.enterExecute_clause = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#execute_clause.
tsqlListener.prototype.exitExecute_clause = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#declare_local.
tsqlListener.prototype.enterDeclare_local = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#declare_local.
tsqlListener.prototype.exitDeclare_local = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_type_definition.
tsqlListener.prototype.enterTable_type_definition = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_type_definition.
tsqlListener.prototype.exitTable_type_definition = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_def_table_constraints.
tsqlListener.prototype.enterColumn_def_table_constraints = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_def_table_constraints.
tsqlListener.prototype.exitColumn_def_table_constraints = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_def_table_constraint.
tsqlListener.prototype.enterColumn_def_table_constraint = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_def_table_constraint.
tsqlListener.prototype.exitColumn_def_table_constraint = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_definition.
tsqlListener.prototype.enterColumn_definition = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_definition.
tsqlListener.prototype.exitColumn_definition = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_constraint.
tsqlListener.prototype.enterColumn_constraint = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_constraint.
tsqlListener.prototype.exitColumn_constraint = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_constraint.
tsqlListener.prototype.enterTable_constraint = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_constraint.
tsqlListener.prototype.exitTable_constraint = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#index_options.
tsqlListener.prototype.enterIndex_options = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#index_options.
tsqlListener.prototype.exitIndex_options = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#index_option.
tsqlListener.prototype.enterIndex_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#index_option.
tsqlListener.prototype.exitIndex_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#declare_cursor.
tsqlListener.prototype.enterDeclare_cursor = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#declare_cursor.
tsqlListener.prototype.exitDeclare_cursor = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#declare_set_cursor_common.
tsqlListener.prototype.enterDeclare_set_cursor_common = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#declare_set_cursor_common.
tsqlListener.prototype.exitDeclare_set_cursor_common = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#fetch_cursor.
tsqlListener.prototype.enterFetch_cursor = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#fetch_cursor.
tsqlListener.prototype.exitFetch_cursor = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#set_special.
tsqlListener.prototype.enterSet_special = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#set_special.
tsqlListener.prototype.exitSet_special = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#constant_LOCAL_ID.
tsqlListener.prototype.enterConstant_LOCAL_ID = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#constant_LOCAL_ID.
tsqlListener.prototype.exitConstant_LOCAL_ID = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#binary_operator_expression.
tsqlListener.prototype.enterBinary_operator_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#binary_operator_expression.
tsqlListener.prototype.exitBinary_operator_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#primitive_expression.
tsqlListener.prototype.enterPrimitive_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#primitive_expression.
tsqlListener.prototype.exitPrimitive_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#bracket_expression.
tsqlListener.prototype.enterBracket_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#bracket_expression.
tsqlListener.prototype.exitBracket_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#unary_operator_expression.
tsqlListener.prototype.enterUnary_operator_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#unary_operator_expression.
tsqlListener.prototype.exitUnary_operator_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#function_call_expression.
tsqlListener.prototype.enterFunction_call_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#function_call_expression.
tsqlListener.prototype.exitFunction_call_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#case_expression.
tsqlListener.prototype.enterCase_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#case_expression.
tsqlListener.prototype.exitCase_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_ref_expression.
tsqlListener.prototype.enterColumn_ref_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_ref_expression.
tsqlListener.prototype.exitColumn_ref_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#subquery_expression.
tsqlListener.prototype.enterSubquery_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#subquery_expression.
tsqlListener.prototype.exitSubquery_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#over_clause_expression.
tsqlListener.prototype.enterOver_clause_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#over_clause_expression.
tsqlListener.prototype.exitOver_clause_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#constant_expression.
tsqlListener.prototype.enterConstant_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#constant_expression.
tsqlListener.prototype.exitConstant_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#subquery.
tsqlListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#subquery.
tsqlListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#with_expression.
tsqlListener.prototype.enterWith_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#with_expression.
tsqlListener.prototype.exitWith_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#common_table_expression.
tsqlListener.prototype.enterCommon_table_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#common_table_expression.
tsqlListener.prototype.exitCommon_table_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#update_elem.
tsqlListener.prototype.enterUpdate_elem = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#update_elem.
tsqlListener.prototype.exitUpdate_elem = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#search_condition_list.
tsqlListener.prototype.enterSearch_condition_list = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#search_condition_list.
tsqlListener.prototype.exitSearch_condition_list = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#search_condition.
tsqlListener.prototype.enterSearch_condition = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#search_condition.
tsqlListener.prototype.exitSearch_condition = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#search_condition_and.
tsqlListener.prototype.enterSearch_condition_and = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#search_condition_and.
tsqlListener.prototype.exitSearch_condition_and = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#search_condition_not.
tsqlListener.prototype.enterSearch_condition_not = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#search_condition_not.
tsqlListener.prototype.exitSearch_condition_not = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#predicate.
tsqlListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#predicate.
tsqlListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#query_expression.
tsqlListener.prototype.enterQuery_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#query_expression.
tsqlListener.prototype.exitQuery_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#union.
tsqlListener.prototype.enterUnion = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#union.
tsqlListener.prototype.exitUnion = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#query_specification.
tsqlListener.prototype.enterQuery_specification = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#query_specification.
tsqlListener.prototype.exitQuery_specification = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#order_by_clause.
tsqlListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#order_by_clause.
tsqlListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#for_clause.
tsqlListener.prototype.enterFor_clause = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#for_clause.
tsqlListener.prototype.exitFor_clause = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#xml_common_directives.
tsqlListener.prototype.enterXml_common_directives = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#xml_common_directives.
tsqlListener.prototype.exitXml_common_directives = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#order_by_expression.
tsqlListener.prototype.enterOrder_by_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#order_by_expression.
tsqlListener.prototype.exitOrder_by_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#group_by_item.
tsqlListener.prototype.enterGroup_by_item = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#group_by_item.
tsqlListener.prototype.exitGroup_by_item = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#option_clause.
tsqlListener.prototype.enterOption_clause = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#option_clause.
tsqlListener.prototype.exitOption_clause = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#option.
tsqlListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#option.
tsqlListener.prototype.exitOption = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#optimize_for_arg.
tsqlListener.prototype.enterOptimize_for_arg = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#optimize_for_arg.
tsqlListener.prototype.exitOptimize_for_arg = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#select_list.
tsqlListener.prototype.enterSelect_list = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#select_list.
tsqlListener.prototype.exitSelect_list = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#select_list_elem.
tsqlListener.prototype.enterSelect_list_elem = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#select_list_elem.
tsqlListener.prototype.exitSelect_list_elem = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_sources.
tsqlListener.prototype.enterTable_sources = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_sources.
tsqlListener.prototype.exitTable_sources = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_source.
tsqlListener.prototype.enterTable_source = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_source.
tsqlListener.prototype.exitTable_source = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_source_item_joined.
tsqlListener.prototype.enterTable_source_item_joined = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_source_item_joined.
tsqlListener.prototype.exitTable_source_item_joined = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_source_item.
tsqlListener.prototype.enterTable_source_item = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_source_item.
tsqlListener.prototype.exitTable_source_item = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#change_table.
tsqlListener.prototype.enterChange_table = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#change_table.
tsqlListener.prototype.exitChange_table = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#join_part.
tsqlListener.prototype.enterJoin_part = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#join_part.
tsqlListener.prototype.exitJoin_part = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_name_with_hint.
tsqlListener.prototype.enterTable_name_with_hint = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_name_with_hint.
tsqlListener.prototype.exitTable_name_with_hint = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#rowset_function.
tsqlListener.prototype.enterRowset_function = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#rowset_function.
tsqlListener.prototype.exitRowset_function = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#bulk_option.
tsqlListener.prototype.enterBulk_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#bulk_option.
tsqlListener.prototype.exitBulk_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#derived_table.
tsqlListener.prototype.enterDerived_table = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#derived_table.
tsqlListener.prototype.exitDerived_table = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#function_call.
tsqlListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#function_call.
tsqlListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#switch_section.
tsqlListener.prototype.enterSwitch_section = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#switch_section.
tsqlListener.prototype.exitSwitch_section = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#switch_search_condition_section.
tsqlListener.prototype.enterSwitch_search_condition_section = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#switch_search_condition_section.
tsqlListener.prototype.exitSwitch_search_condition_section = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#as_table_alias.
tsqlListener.prototype.enterAs_table_alias = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#as_table_alias.
tsqlListener.prototype.exitAs_table_alias = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_alias.
tsqlListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_alias.
tsqlListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#with_table_hints.
tsqlListener.prototype.enterWith_table_hints = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#with_table_hints.
tsqlListener.prototype.exitWith_table_hints = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#insert_with_table_hints.
tsqlListener.prototype.enterInsert_with_table_hints = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#insert_with_table_hints.
tsqlListener.prototype.exitInsert_with_table_hints = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_hint.
tsqlListener.prototype.enterTable_hint = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_hint.
tsqlListener.prototype.exitTable_hint = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#index_value.
tsqlListener.prototype.enterIndex_value = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#index_value.
tsqlListener.prototype.exitIndex_value = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_alias_list.
tsqlListener.prototype.enterColumn_alias_list = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_alias_list.
tsqlListener.prototype.exitColumn_alias_list = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_alias.
tsqlListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_alias.
tsqlListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_value_constructor.
tsqlListener.prototype.enterTable_value_constructor = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_value_constructor.
tsqlListener.prototype.exitTable_value_constructor = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#expression_list.
tsqlListener.prototype.enterExpression_list = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#expression_list.
tsqlListener.prototype.exitExpression_list = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#ranking_windowed_function.
tsqlListener.prototype.enterRanking_windowed_function = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#ranking_windowed_function.
tsqlListener.prototype.exitRanking_windowed_function = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#aggregate_windowed_function.
tsqlListener.prototype.enterAggregate_windowed_function = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#aggregate_windowed_function.
tsqlListener.prototype.exitAggregate_windowed_function = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#all_distinct_expression.
tsqlListener.prototype.enterAll_distinct_expression = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#all_distinct_expression.
tsqlListener.prototype.exitAll_distinct_expression = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#over_clause.
tsqlListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#over_clause.
tsqlListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#row_or_range_clause.
tsqlListener.prototype.enterRow_or_range_clause = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#row_or_range_clause.
tsqlListener.prototype.exitRow_or_range_clause = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#window_frame_extent.
tsqlListener.prototype.enterWindow_frame_extent = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#window_frame_extent.
tsqlListener.prototype.exitWindow_frame_extent = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#window_frame_bound.
tsqlListener.prototype.enterWindow_frame_bound = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#window_frame_bound.
tsqlListener.prototype.exitWindow_frame_bound = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#window_frame_preceding.
tsqlListener.prototype.enterWindow_frame_preceding = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#window_frame_preceding.
tsqlListener.prototype.exitWindow_frame_preceding = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#window_frame_following.
tsqlListener.prototype.enterWindow_frame_following = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#window_frame_following.
tsqlListener.prototype.exitWindow_frame_following = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#create_database_option.
tsqlListener.prototype.enterCreate_database_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#create_database_option.
tsqlListener.prototype.exitCreate_database_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#database_filestream_option.
tsqlListener.prototype.enterDatabase_filestream_option = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#database_filestream_option.
tsqlListener.prototype.exitDatabase_filestream_option = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#database_file_spec.
tsqlListener.prototype.enterDatabase_file_spec = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#database_file_spec.
tsqlListener.prototype.exitDatabase_file_spec = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#file_group.
tsqlListener.prototype.enterFile_group = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#file_group.
tsqlListener.prototype.exitFile_group = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#file_spec.
tsqlListener.prototype.enterFile_spec = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#file_spec.
tsqlListener.prototype.exitFile_spec = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#full_table_name.
tsqlListener.prototype.enterFull_table_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#full_table_name.
tsqlListener.prototype.exitFull_table_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#table_name.
tsqlListener.prototype.enterTable_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#table_name.
tsqlListener.prototype.exitTable_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#simple_name.
tsqlListener.prototype.enterSimple_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#simple_name.
tsqlListener.prototype.exitSimple_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#func_proc_name.
tsqlListener.prototype.enterFunc_proc_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#func_proc_name.
tsqlListener.prototype.exitFunc_proc_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#ddl_object.
tsqlListener.prototype.enterDdl_object = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#ddl_object.
tsqlListener.prototype.exitDdl_object = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#full_column_name.
tsqlListener.prototype.enterFull_column_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#full_column_name.
tsqlListener.prototype.exitFull_column_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#column_name_list.
tsqlListener.prototype.enterColumn_name_list = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#column_name_list.
tsqlListener.prototype.exitColumn_name_list = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#cursor_name.
tsqlListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#cursor_name.
tsqlListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#on_off.
tsqlListener.prototype.enterOn_off = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#on_off.
tsqlListener.prototype.exitOn_off = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#clustered.
tsqlListener.prototype.enterClustered = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#clustered.
tsqlListener.prototype.exitClustered = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#null_notnull.
tsqlListener.prototype.enterNull_notnull = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#null_notnull.
tsqlListener.prototype.exitNull_notnull = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#scalar_function_name.
tsqlListener.prototype.enterScalar_function_name = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#scalar_function_name.
tsqlListener.prototype.exitScalar_function_name = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#data_type.
tsqlListener.prototype.enterData_type = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#data_type.
tsqlListener.prototype.exitData_type = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#default_value.
tsqlListener.prototype.enterDefault_value = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#default_value.
tsqlListener.prototype.exitDefault_value = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#constant.
tsqlListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#constant.
tsqlListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#sign.
tsqlListener.prototype.enterSign = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#sign.
tsqlListener.prototype.exitSign = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#id.
tsqlListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#id.
tsqlListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#simple_id.
tsqlListener.prototype.enterSimple_id = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#simple_id.
tsqlListener.prototype.exitSimple_id = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#comparison_operator.
tsqlListener.prototype.enterComparison_operator = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#comparison_operator.
tsqlListener.prototype.exitComparison_operator = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#assignment_operator.
tsqlListener.prototype.enterAssignment_operator = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#assignment_operator.
tsqlListener.prototype.exitAssignment_operator = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#file_size.
tsqlListener.prototype.enterFile_size = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#file_size.
tsqlListener.prototype.exitFile_size = function(ctx) {
};



exports.tsqlListener = tsqlListener;
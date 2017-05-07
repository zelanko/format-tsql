// Generated from tsql.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var abstractListenerMethod = (ctx) => {
	
};

// This class defines a complete listener for a parse tree produced by tsqlParser.
function tsqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

tsqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
tsqlListener.prototype.constructor = tsqlListener;

// Enter a parse tree produced by tsqlParser#tsql_file.
tsqlListener.prototype.enterTsql_file = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#tsql_file.
tsqlListener.prototype.exitTsql_file = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#batch.
tsqlListener.prototype.enterBatch = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#batch.
tsqlListener.prototype.exitBatch = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#sql_clauses.
tsqlListener.prototype.enterSql_clauses = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#sql_clauses.
tsqlListener.prototype.exitSql_clauses = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#sql_clause.
tsqlListener.prototype.enterSql_clause = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#sql_clause.
tsqlListener.prototype.exitSql_clause = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#dml_clause.
tsqlListener.prototype.enterDml_clause = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#dml_clause.
tsqlListener.prototype.exitDml_clause = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#ddl_clause.
tsqlListener.prototype.enterDdl_clause = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#ddl_clause.
tsqlListener.prototype.exitDdl_clause = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#block_statement.
tsqlListener.prototype.enterBlock_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#block_statement.
tsqlListener.prototype.exitBlock_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#break_statement.
tsqlListener.prototype.enterBreak_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#break_statement.
tsqlListener.prototype.exitBreak_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#continue_statement.
tsqlListener.prototype.enterContinue_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#continue_statement.
tsqlListener.prototype.exitContinue_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#goto_statement.
tsqlListener.prototype.enterGoto_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#goto_statement.
tsqlListener.prototype.exitGoto_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#if_statement.
tsqlListener.prototype.enterIf_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#if_statement.
tsqlListener.prototype.exitIf_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#return_statement.
tsqlListener.prototype.enterReturn_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#return_statement.
tsqlListener.prototype.exitReturn_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#throw_statement.
tsqlListener.prototype.enterThrow_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#throw_statement.
tsqlListener.prototype.exitThrow_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#try_catch_statement.
tsqlListener.prototype.enterTry_catch_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#try_catch_statement.
tsqlListener.prototype.exitTry_catch_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#waitfor_statement.
tsqlListener.prototype.enterWaitfor_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#waitfor_statement.
tsqlListener.prototype.exitWaitfor_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#while_statement.
tsqlListener.prototype.enterWhile_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#while_statement.
tsqlListener.prototype.exitWhile_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#print_statement.
tsqlListener.prototype.enterPrint_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#print_statement.
tsqlListener.prototype.exitPrint_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#raiseerror_statement.
tsqlListener.prototype.enterRaiseerror_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#raiseerror_statement.
tsqlListener.prototype.exitRaiseerror_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#another_statement.
tsqlListener.prototype.enterAnother_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#another_statement.
tsqlListener.prototype.exitAnother_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#delete_statement.
tsqlListener.prototype.enterDelete_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#delete_statement.
tsqlListener.prototype.exitDelete_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#delete_statement_from.
tsqlListener.prototype.enterDelete_statement_from = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#delete_statement_from.
tsqlListener.prototype.exitDelete_statement_from = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#insert_statement.
tsqlListener.prototype.enterInsert_statement = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#insert_statement.
tsqlListener.prototype.exitInsert_statement = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#insert_statement_value.
tsqlListener.prototype.enterInsert_statement_value = abstractListenerMethod;



// Exit a parse tree produced by tsqlParser#insert_statement_value.
tsqlListener.prototype.exitInsert_statement_value = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#select_statement.
tsqlListener.prototype.enterSelect_statement = abstractListenerMethod;



// Exit a parse tree produced by tsqlParser#select_statement.
tsqlListener.prototype.exitSelect_statement = abstractListenerMethod;




// Enter a parse tree produced by tsqlParser#update_statement.
tsqlListener.prototype.enterUpdate_statement = abstractListenerMethod;



// Exit a parse tree produced by tsqlParser#update_statement.
tsqlListener.prototype.exitUpdate_statement = abstractListenerMethod;




// Enter a parse tree produced by tsqlParser#output_clause.
tsqlListener.prototype.enterOutput_clause = abstractListenerMethod;



// Exit a parse tree produced by tsqlParser#output_clause.
tsqlListener.prototype.exitOutput_clause = abstractListenerMethod;




// Enter a parse tree produced by tsqlParser#output_dml_list_elem.
tsqlListener.prototype.enterOutput_dml_list_elem = abstractListenerMethod;



// Exit a parse tree produced by tsqlParser#output_dml_list_elem.
tsqlListener.prototype.exitOutput_dml_list_elem = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#output_column_name.
tsqlListener.prototype.enterOutput_column_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#output_column_name.
tsqlListener.prototype.exitOutput_column_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_database.
tsqlListener.prototype.enterCreate_database = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_database.
tsqlListener.prototype.exitCreate_database = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_index.
tsqlListener.prototype.enterCreate_index = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_index.
tsqlListener.prototype.exitCreate_index = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_procedure.
tsqlListener.prototype.enterCreate_procedure = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_procedure.
tsqlListener.prototype.exitCreate_procedure = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#procedure_param.
tsqlListener.prototype.enterProcedure_param = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#procedure_param.
tsqlListener.prototype.exitProcedure_param = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#procedure_option.
tsqlListener.prototype.enterProcedure_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#procedure_option.
tsqlListener.prototype.exitProcedure_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_statistics.
tsqlListener.prototype.enterCreate_statistics = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_statistics.
tsqlListener.prototype.exitCreate_statistics = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_table.
tsqlListener.prototype.enterCreate_table = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_table.
tsqlListener.prototype.exitCreate_table = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_view.
tsqlListener.prototype.enterCreate_view = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_view.
tsqlListener.prototype.exitCreate_view = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#view_attribute.
tsqlListener.prototype.enterView_attribute = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#view_attribute.
tsqlListener.prototype.exitView_attribute = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#alter_table.
tsqlListener.prototype.enterAlter_table = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#alter_table.
tsqlListener.prototype.exitAlter_table = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#alter_database.
tsqlListener.prototype.enterAlter_database = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#alter_database.
tsqlListener.prototype.exitAlter_database = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#database_optionspec.
tsqlListener.prototype.enterDatabase_optionspec = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#database_optionspec.
tsqlListener.prototype.exitDatabase_optionspec = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#auto_option.
tsqlListener.prototype.enterAuto_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#auto_option.
tsqlListener.prototype.exitAuto_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#change_tracking_option.
tsqlListener.prototype.enterChange_tracking_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#change_tracking_option.
tsqlListener.prototype.exitChange_tracking_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#change_tracking_option_list.
tsqlListener.prototype.enterChange_tracking_option_list = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#change_tracking_option_list.
tsqlListener.prototype.exitChange_tracking_option_list = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#containment_option.
tsqlListener.prototype.enterContainment_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#containment_option.
tsqlListener.prototype.exitContainment_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#cursor_option.
tsqlListener.prototype.enterCursor_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#cursor_option.
tsqlListener.prototype.exitCursor_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#date_correlation_optimization_option.
tsqlListener.prototype.enterDate_correlation_optimization_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#date_correlation_optimization_option.
tsqlListener.prototype.exitDate_correlation_optimization_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#db_encryption_option.
tsqlListener.prototype.enterDb_encryption_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#db_encryption_option.
tsqlListener.prototype.exitDb_encryption_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#db_state_option.
tsqlListener.prototype.enterDb_state_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#db_state_option.
tsqlListener.prototype.exitDb_state_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#db_update_option.
tsqlListener.prototype.enterDb_update_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#db_update_option.
tsqlListener.prototype.exitDb_update_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#db_user_access_option.
tsqlListener.prototype.enterDb_user_access_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#db_user_access_option.
tsqlListener.prototype.exitDb_user_access_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#delayed_durability_option.
tsqlListener.prototype.enterDelayed_durability_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#delayed_durability_option.
tsqlListener.prototype.exitDelayed_durability_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#external_access_option.
tsqlListener.prototype.enterExternal_access_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#external_access_option.
tsqlListener.prototype.exitExternal_access_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#mixed_page_allocation_option.
tsqlListener.prototype.enterMixed_page_allocation_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#mixed_page_allocation_option.
tsqlListener.prototype.exitMixed_page_allocation_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#parameterization_option.
tsqlListener.prototype.enterParameterization_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#parameterization_option.
tsqlListener.prototype.exitParameterization_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#recovery_option.
tsqlListener.prototype.enterRecovery_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#recovery_option.
tsqlListener.prototype.exitRecovery_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#service_broker_option.
tsqlListener.prototype.enterService_broker_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#service_broker_option.
tsqlListener.prototype.exitService_broker_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#snapshot_option.
tsqlListener.prototype.enterSnapshot_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#snapshot_option.
tsqlListener.prototype.exitSnapshot_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#sql_option.
tsqlListener.prototype.enterSql_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#sql_option.
tsqlListener.prototype.exitSql_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#target_recovery_time_option.
tsqlListener.prototype.enterTarget_recovery_time_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#target_recovery_time_option.
tsqlListener.prototype.exitTarget_recovery_time_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#termination.
tsqlListener.prototype.enterTermination = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#termination.
tsqlListener.prototype.exitTermination = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#drop_index.
tsqlListener.prototype.enterDrop_index = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#drop_index.
tsqlListener.prototype.exitDrop_index = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#drop_procedure.
tsqlListener.prototype.enterDrop_procedure = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#drop_procedure.
tsqlListener.prototype.exitDrop_procedure = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#drop_statistics.
tsqlListener.prototype.enterDrop_statistics = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#drop_statistics.
tsqlListener.prototype.exitDrop_statistics = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#drop_table.
tsqlListener.prototype.enterDrop_table = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#drop_table.
tsqlListener.prototype.exitDrop_table = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#drop_view.
tsqlListener.prototype.enterDrop_view = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#drop_view.
tsqlListener.prototype.exitDrop_view = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_type.
tsqlListener.prototype.enterCreate_type = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_type.
tsqlListener.prototype.exitCreate_type = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#drop_type.
tsqlListener.prototype.enterDrop_type = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#drop_type.
tsqlListener.prototype.exitDrop_type = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#rowset_function_limited.
tsqlListener.prototype.enterRowset_function_limited = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#rowset_function_limited.
tsqlListener.prototype.exitRowset_function_limited = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#openquery.
tsqlListener.prototype.enterOpenquery = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#openquery.
tsqlListener.prototype.exitOpenquery = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#opendatasource.
tsqlListener.prototype.enterOpendatasource = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#opendatasource.
tsqlListener.prototype.exitOpendatasource = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#declare_statement.
tsqlListener.prototype.enterDeclare_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#declare_statement.
tsqlListener.prototype.exitDeclare_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#cursor_statement.
tsqlListener.prototype.enterCursor_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#cursor_statement.
tsqlListener.prototype.exitCursor_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#execute_statement.
tsqlListener.prototype.enterExecute_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#execute_statement.
tsqlListener.prototype.exitExecute_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#execute_statement_arg.
tsqlListener.prototype.enterExecute_statement_arg = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#execute_statement_arg.
tsqlListener.prototype.exitExecute_statement_arg = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#execute_var_string.
tsqlListener.prototype.enterExecute_var_string = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#execute_var_string.
tsqlListener.prototype.exitExecute_var_string = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#security_statement.
tsqlListener.prototype.enterSecurity_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#security_statement.
tsqlListener.prototype.exitSecurity_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#grant_permission.
tsqlListener.prototype.enterGrant_permission = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#grant_permission.
tsqlListener.prototype.exitGrant_permission = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#set_statement.
tsqlListener.prototype.enterSet_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#set_statement.
tsqlListener.prototype.exitSet_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#transaction_statement.
tsqlListener.prototype.enterTransaction_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#transaction_statement.
tsqlListener.prototype.exitTransaction_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#go_statement.
tsqlListener.prototype.enterGo_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#go_statement.
tsqlListener.prototype.exitGo_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#use_statement.
tsqlListener.prototype.enterUse_statement = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#use_statement.
tsqlListener.prototype.exitUse_statement = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#execute_clause.
tsqlListener.prototype.enterExecute_clause = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#execute_clause.
tsqlListener.prototype.exitExecute_clause = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#declare_local.
tsqlListener.prototype.enterDeclare_local = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#declare_local.
tsqlListener.prototype.exitDeclare_local = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_type_definition.
tsqlListener.prototype.enterTable_type_definition = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_type_definition.
tsqlListener.prototype.exitTable_type_definition = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_def_table_constraints.
tsqlListener.prototype.enterColumn_def_table_constraints = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_def_table_constraints.
tsqlListener.prototype.exitColumn_def_table_constraints = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_def_table_constraint.
tsqlListener.prototype.enterColumn_def_table_constraint = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_def_table_constraint.
tsqlListener.prototype.exitColumn_def_table_constraint = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_definition.
tsqlListener.prototype.enterColumn_definition = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_definition.
tsqlListener.prototype.exitColumn_definition = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_constraint.
tsqlListener.prototype.enterColumn_constraint = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_constraint.
tsqlListener.prototype.exitColumn_constraint = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_constraint.
tsqlListener.prototype.enterTable_constraint = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_constraint.
tsqlListener.prototype.exitTable_constraint = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#index_options.
tsqlListener.prototype.enterIndex_options = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#index_options.
tsqlListener.prototype.exitIndex_options = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#index_option.
tsqlListener.prototype.enterIndex_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#index_option.
tsqlListener.prototype.exitIndex_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#declare_cursor.
tsqlListener.prototype.enterDeclare_cursor = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#declare_cursor.
tsqlListener.prototype.exitDeclare_cursor = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#declare_set_cursor_common.
tsqlListener.prototype.enterDeclare_set_cursor_common = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#declare_set_cursor_common.
tsqlListener.prototype.exitDeclare_set_cursor_common = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#fetch_cursor.
tsqlListener.prototype.enterFetch_cursor = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#fetch_cursor.
tsqlListener.prototype.exitFetch_cursor = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#set_special.
tsqlListener.prototype.enterSet_special = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#set_special.
tsqlListener.prototype.exitSet_special = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#constant_LOCAL_ID.
tsqlListener.prototype.enterConstant_LOCAL_ID = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#constant_LOCAL_ID.
tsqlListener.prototype.exitConstant_LOCAL_ID = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#binary_operator_expression.
tsqlListener.prototype.enterBinary_operator_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#binary_operator_expression.
tsqlListener.prototype.exitBinary_operator_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#primitive_expression.
tsqlListener.prototype.enterPrimitive_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#primitive_expression.
tsqlListener.prototype.exitPrimitive_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#bracket_expression.
tsqlListener.prototype.enterBracket_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#bracket_expression.
tsqlListener.prototype.exitBracket_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#unary_operator_expression.
tsqlListener.prototype.enterUnary_operator_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#unary_operator_expression.
tsqlListener.prototype.exitUnary_operator_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#function_call_expression.
tsqlListener.prototype.enterFunction_call_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#function_call_expression.
tsqlListener.prototype.exitFunction_call_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#case_expression.
tsqlListener.prototype.enterCase_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#case_expression.
tsqlListener.prototype.exitCase_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_ref_expression.
tsqlListener.prototype.enterColumn_ref_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_ref_expression.
tsqlListener.prototype.exitColumn_ref_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#subquery_expression.
tsqlListener.prototype.enterSubquery_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#subquery_expression.
tsqlListener.prototype.exitSubquery_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#over_clause_expression.
tsqlListener.prototype.enterOver_clause_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#over_clause_expression.
tsqlListener.prototype.exitOver_clause_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#constant_expression.
tsqlListener.prototype.enterConstant_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#constant_expression.
tsqlListener.prototype.exitConstant_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#subquery.
tsqlListener.prototype.enterSubquery = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#subquery.
tsqlListener.prototype.exitSubquery = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#with_expression.
tsqlListener.prototype.enterWith_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#with_expression.
tsqlListener.prototype.exitWith_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#common_table_expression.
tsqlListener.prototype.enterCommon_table_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#common_table_expression.
tsqlListener.prototype.exitCommon_table_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#update_elem.
tsqlListener.prototype.enterUpdate_elem = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#update_elem.
tsqlListener.prototype.exitUpdate_elem = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#search_condition_list.
tsqlListener.prototype.enterSearch_condition_list = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#search_condition_list.
tsqlListener.prototype.exitSearch_condition_list = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#search_condition.
tsqlListener.prototype.enterSearch_condition = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#search_condition.
tsqlListener.prototype.exitSearch_condition = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#search_condition_and.
tsqlListener.prototype.enterSearch_condition_and = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#search_condition_and.
tsqlListener.prototype.exitSearch_condition_and = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#search_condition_not.
tsqlListener.prototype.enterSearch_condition_not = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#search_condition_not.
tsqlListener.prototype.exitSearch_condition_not = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#predicate.
tsqlListener.prototype.enterPredicate = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#predicate.
tsqlListener.prototype.exitPredicate = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#query_expression.
tsqlListener.prototype.enterQuery_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#query_expression.
tsqlListener.prototype.exitQuery_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#union.
tsqlListener.prototype.enterUnion = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#union.
tsqlListener.prototype.exitUnion = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#query_specification.
tsqlListener.prototype.enterQuery_specification = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#query_specification.
tsqlListener.prototype.exitQuery_specification = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#order_by_clause.
tsqlListener.prototype.enterOrder_by_clause = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#order_by_clause.
tsqlListener.prototype.exitOrder_by_clause = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#for_clause.
tsqlListener.prototype.enterFor_clause = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#for_clause.
tsqlListener.prototype.exitFor_clause = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#xml_common_directives.
tsqlListener.prototype.enterXml_common_directives = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#xml_common_directives.
tsqlListener.prototype.exitXml_common_directives = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#order_by_expression.
tsqlListener.prototype.enterOrder_by_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#order_by_expression.
tsqlListener.prototype.exitOrder_by_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#group_by_item.
tsqlListener.prototype.enterGroup_by_item = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#group_by_item.
tsqlListener.prototype.exitGroup_by_item = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#option_clause.
tsqlListener.prototype.enterOption_clause = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#option_clause.
tsqlListener.prototype.exitOption_clause = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#option.
tsqlListener.prototype.enterOption = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#option.
tsqlListener.prototype.exitOption = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#optimize_for_arg.
tsqlListener.prototype.enterOptimize_for_arg = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#optimize_for_arg.
tsqlListener.prototype.exitOptimize_for_arg = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#select_list.
tsqlListener.prototype.enterSelect_list = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#select_list.
tsqlListener.prototype.exitSelect_list = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#select_list_elem.
tsqlListener.prototype.enterSelect_list_elem = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#select_list_elem.
tsqlListener.prototype.exitSelect_list_elem = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_sources.
tsqlListener.prototype.enterTable_sources = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_sources.
tsqlListener.prototype.exitTable_sources = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_source.
tsqlListener.prototype.enterTable_source = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_source.
tsqlListener.prototype.exitTable_source = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_source_item_joined.
tsqlListener.prototype.enterTable_source_item_joined = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_source_item_joined.
tsqlListener.prototype.exitTable_source_item_joined = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_source_item.
tsqlListener.prototype.enterTable_source_item = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_source_item.
tsqlListener.prototype.exitTable_source_item = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#change_table.
tsqlListener.prototype.enterChange_table = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#change_table.
tsqlListener.prototype.exitChange_table = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#join_part.
tsqlListener.prototype.enterJoin_part = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#join_part.
tsqlListener.prototype.exitJoin_part = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_name_with_hint.
tsqlListener.prototype.enterTable_name_with_hint = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_name_with_hint.
tsqlListener.prototype.exitTable_name_with_hint = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#rowset_function.
tsqlListener.prototype.enterRowset_function = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#rowset_function.
tsqlListener.prototype.exitRowset_function = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#bulk_option.
tsqlListener.prototype.enterBulk_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#bulk_option.
tsqlListener.prototype.exitBulk_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#derived_table.
tsqlListener.prototype.enterDerived_table = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#derived_table.
tsqlListener.prototype.exitDerived_table = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#function_call.
tsqlListener.prototype.enterFunction_call = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#function_call.
tsqlListener.prototype.exitFunction_call = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#switch_section.
tsqlListener.prototype.enterSwitch_section = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#switch_section.
tsqlListener.prototype.exitSwitch_section = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#switch_search_condition_section.
tsqlListener.prototype.enterSwitch_search_condition_section = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#switch_search_condition_section.
tsqlListener.prototype.exitSwitch_search_condition_section = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#as_table_alias.
tsqlListener.prototype.enterAs_table_alias = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#as_table_alias.
tsqlListener.prototype.exitAs_table_alias = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_alias.
tsqlListener.prototype.enterTable_alias = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_alias.
tsqlListener.prototype.exitTable_alias = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#with_table_hints.
tsqlListener.prototype.enterWith_table_hints = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#with_table_hints.
tsqlListener.prototype.exitWith_table_hints = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#insert_with_table_hints.
tsqlListener.prototype.enterInsert_with_table_hints = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#insert_with_table_hints.
tsqlListener.prototype.exitInsert_with_table_hints = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_hint.
tsqlListener.prototype.enterTable_hint = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_hint.
tsqlListener.prototype.exitTable_hint = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#index_value.
tsqlListener.prototype.enterIndex_value = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#index_value.
tsqlListener.prototype.exitIndex_value = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_alias_list.
tsqlListener.prototype.enterColumn_alias_list = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_alias_list.
tsqlListener.prototype.exitColumn_alias_list = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_alias.
tsqlListener.prototype.enterColumn_alias = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_alias.
tsqlListener.prototype.exitColumn_alias = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_value_constructor.
tsqlListener.prototype.enterTable_value_constructor = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_value_constructor.
tsqlListener.prototype.exitTable_value_constructor = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#expression_list.
tsqlListener.prototype.enterExpression_list = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#expression_list.
tsqlListener.prototype.exitExpression_list = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#ranking_windowed_function.
tsqlListener.prototype.enterRanking_windowed_function = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#ranking_windowed_function.
tsqlListener.prototype.exitRanking_windowed_function = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#aggregate_windowed_function.
tsqlListener.prototype.enterAggregate_windowed_function = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#aggregate_windowed_function.
tsqlListener.prototype.exitAggregate_windowed_function = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#all_distinct_expression.
tsqlListener.prototype.enterAll_distinct_expression = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#all_distinct_expression.
tsqlListener.prototype.exitAll_distinct_expression = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#over_clause.
tsqlListener.prototype.enterOver_clause = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#over_clause.
tsqlListener.prototype.exitOver_clause = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#row_or_range_clause.
tsqlListener.prototype.enterRow_or_range_clause = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#row_or_range_clause.
tsqlListener.prototype.exitRow_or_range_clause = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#window_frame_extent.
tsqlListener.prototype.enterWindow_frame_extent = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#window_frame_extent.
tsqlListener.prototype.exitWindow_frame_extent = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#window_frame_bound.
tsqlListener.prototype.enterWindow_frame_bound = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#window_frame_bound.
tsqlListener.prototype.exitWindow_frame_bound = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#window_frame_preceding.
tsqlListener.prototype.enterWindow_frame_preceding = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#window_frame_preceding.
tsqlListener.prototype.exitWindow_frame_preceding = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#window_frame_following.
tsqlListener.prototype.enterWindow_frame_following = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#window_frame_following.
tsqlListener.prototype.exitWindow_frame_following = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#create_database_option.
tsqlListener.prototype.enterCreate_database_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#create_database_option.
tsqlListener.prototype.exitCreate_database_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#database_filestream_option.
tsqlListener.prototype.enterDatabase_filestream_option = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#database_filestream_option.
tsqlListener.prototype.exitDatabase_filestream_option = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#database_file_spec.
tsqlListener.prototype.enterDatabase_file_spec = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#database_file_spec.
tsqlListener.prototype.exitDatabase_file_spec = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#file_group.
tsqlListener.prototype.enterFile_group = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#file_group.
tsqlListener.prototype.exitFile_group = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#file_spec.
tsqlListener.prototype.enterFile_spec = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#file_spec.
tsqlListener.prototype.exitFile_spec = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#full_table_name.
tsqlListener.prototype.enterFull_table_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#full_table_name.
tsqlListener.prototype.exitFull_table_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#table_name.
tsqlListener.prototype.enterTable_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#table_name.
tsqlListener.prototype.exitTable_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#simple_name.
tsqlListener.prototype.enterSimple_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#simple_name.
tsqlListener.prototype.exitSimple_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#func_proc_name.
tsqlListener.prototype.enterFunc_proc_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#func_proc_name.
tsqlListener.prototype.exitFunc_proc_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#ddl_object.
tsqlListener.prototype.enterDdl_object = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#ddl_object.
tsqlListener.prototype.exitDdl_object = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#full_column_name.
tsqlListener.prototype.enterFull_column_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#full_column_name.
tsqlListener.prototype.exitFull_column_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#column_name_list.
tsqlListener.prototype.enterColumn_name_list = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#column_name_list.
tsqlListener.prototype.exitColumn_name_list = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#cursor_name.
tsqlListener.prototype.enterCursor_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#cursor_name.
tsqlListener.prototype.exitCursor_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#on_off.
tsqlListener.prototype.enterOn_off = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#on_off.
tsqlListener.prototype.exitOn_off = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#clustered.
tsqlListener.prototype.enterClustered = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#clustered.
tsqlListener.prototype.exitClustered = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#null_notnull.
tsqlListener.prototype.enterNull_notnull = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#null_notnull.
tsqlListener.prototype.exitNull_notnull = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#scalar_function_name.
tsqlListener.prototype.enterScalar_function_name = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#scalar_function_name.
tsqlListener.prototype.exitScalar_function_name = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#data_type.
tsqlListener.prototype.enterData_type = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#data_type.
tsqlListener.prototype.exitData_type = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#default_value.
tsqlListener.prototype.enterDefault_value = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#default_value.
tsqlListener.prototype.exitDefault_value = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#constant.
tsqlListener.prototype.enterConstant = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#constant.
tsqlListener.prototype.exitConstant = abstractListenerMethod;



// Enter a parse tree produced by tsqlParser#sign.
tsqlListener.prototype.enterSign = abstractListenerMethod;


// Exit a parse tree produced by tsqlParser#sign.
tsqlListener.prototype.exitSign = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#id.
tsqlListener.prototype.enterId = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#id.
tsqlListener.prototype.exitId = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#simple_id.
tsqlListener.prototype.enterSimple_id = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#simple_id.
tsqlListener.prototype.exitSimple_id = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#comparison_operator.
tsqlListener.prototype.enterComparison_operator = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#comparison_operator.
tsqlListener.prototype.exitComparison_operator = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#assignment_operator.
tsqlListener.prototype.enterAssignment_operator = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#assignment_operator.
tsqlListener.prototype.exitAssignment_operator = abstractListenerMethod;

// Enter a parse tree produced by tsqlParser#file_size.
tsqlListener.prototype.enterFile_size = abstractListenerMethod;

// Exit a parse tree produced by tsqlParser#file_size.
tsqlListener.prototype.exitFile_size = abstractListenerMethod;

exports.tsqlListener = tsqlListener;
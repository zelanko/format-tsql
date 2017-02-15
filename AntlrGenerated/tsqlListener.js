// Generated from tsql.g4 by ANTLR 4.6
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
};

// Exit a parse tree produced by tsqlParser#tsql_file.
tsqlListener.prototype.exitTsql_file = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#batch.
tsqlListener.prototype.enterBatch = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#batch.
tsqlListener.prototype.exitBatch = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#sql_clauses.
tsqlListener.prototype.enterSql_clauses = function(ctx) {
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


// Enter a parse tree produced by tsqlParser#select_statement.
tsqlListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#select_statement.
tsqlListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by tsqlParser#go_statement.
tsqlListener.prototype.enterGo_statement = function(ctx) {
};

// Exit a parse tree produced by tsqlParser#go_statement.
tsqlListener.prototype.exitGo_statement = function(ctx) {
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
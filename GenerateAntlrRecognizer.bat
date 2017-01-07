REM GENERATE JAVASCRIPT T-SQL RECOGNIZER FILES
REM
REM Prerequisites:
REM *  Java (recommend latest, but the edition antlr4 supports should work)
REM *  antlr complete jar. Lasts used was 4.5.3. In theory, latest antlr v4 will work.
REM      This script assumes the file is found at current user downloads folder.
REM      Update variable ANTLR4 with the correct path to the jar (ie, you moved it or the version changed.
REM *  ./lib/tsql.g4 (already in git; originally taken from  https://github.com/antlr/grammars-v4/blob/master/tsql/tsql.g4)
REM 
REM If the prerequisites are good, just run this batch file to generate the antlr javascript files.

REM Only set the path locally
SETLOCAL

REM path to antlr4 jar
REM change it for where you have the jar
SET ANTLR4=%USERPROFILE%\Downloads\antlr-4.5.3-complete.jar

SET CLASSPATH=.;%ANTLR4%;%CLASSPATH%
PUSHD lib
java org.antlr.v4.Tool -Dlanguage=JavaScript tsql.g4
POPD
import { BaseSqlExpression } from './base-sql-expression.js';
export declare class AssociationPath extends BaseSqlExpression {
    readonly associationPath: readonly string[];
    readonly attributeName: string;
    private readonly brand;
    constructor(associationPath: readonly string[], attributeName: string);
}

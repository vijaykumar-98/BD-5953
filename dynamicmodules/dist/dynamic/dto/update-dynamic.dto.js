"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDynamicDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dynamic_dto_1 = require("./create-dynamic.dto");
class UpdateDynamicDto extends (0, mapped_types_1.PartialType)(create_dynamic_dto_1.CreateDynamicDto) {
}
exports.UpdateDynamicDto = UpdateDynamicDto;
//# sourceMappingURL=update-dynamic.dto.js.map
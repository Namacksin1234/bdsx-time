"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const player_1 = require("bdsx/bds/player");
const command_2 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
let counter = 0;
command_2.command.register("시뮬레이트", "시뮬레이트 플레이어를 소환합니다", command_1.CommandPermissionLevel.Operator).overload((params, origin) => {
    const player = origin.getEntity();
    if (player === null || player === void 0 ? void 0 : player.isPlayer) {
        const name = params.name || "시뮬레이트 플레이어 " + ++counter;
        const smltplayer = player_1.SimulatedPlayer.create(name, player.getPosition(), player.getDimensionId());
    }
    ;
}, { name: [nativetype_1.CxxString, true] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm1zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTBEO0FBQzFELDRDQUFrRDtBQUNsRCwwQ0FBdUM7QUFDdkMsZ0RBQTRDO0FBRTVDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVoQixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0NBQXNCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUNwRixDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNmLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsQyxJQUFJLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLEVBQUU7UUFDbEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksSUFBSSxhQUFhLEdBQUcsRUFBRSxPQUFPLENBQUM7UUFDdEQsTUFBTSxVQUFVLEdBQUcsd0JBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztLQUNsRztJQUFBLENBQUM7QUFDTixDQUFDLEVBQ0QsRUFBRSxJQUFJLEVBQUUsQ0FBQyxzQkFBUyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQzlCLENBQUMifQ==
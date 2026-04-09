import type { Shift, ShiftService } from "../services";

export async function listUserShifts(
  shiftService: ShiftService,
  userId: string
): Promise<Shift[]> {
  return shiftService.listByUserId(userId);
}

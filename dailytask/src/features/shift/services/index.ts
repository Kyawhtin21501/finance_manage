export type Shift = {
  id: string;
  userId: string;
  startAt: string;
  endAt: string;
};

export interface ShiftService {
  listByUserId(userId: string): Promise<Shift[]>;
}

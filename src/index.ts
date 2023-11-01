interface StaffPerson {
  name: string;
  rota: string[];
}

const areWeCovered = (staff: StaffPerson[], day: string): boolean => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let staffScheduled = 0;

  staff.forEach((person) => {
    if (person.rota.includes(day)) {
      staffScheduled++;
    }
  });

  return staffScheduled >= 3;
};

const staffRota: StaffPerson[] = [
  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
  { name: "Anna", rota: ["Saturday", "Sunday", "Tuesday"] },
  { name: "Anna", rota: ["Saturday", "Tuesday", "Wednesday"] },
];

const result = areWeCovered(staffRota, "Saturday");
console.log(result); // Will print true or false

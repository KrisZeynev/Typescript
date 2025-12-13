function visitFloor(floor:

{ number: 1, hallway: 'A', train:() => void, pass: 'Guest' } |

{ number: 2, hallway: 'A', dine: () => void, } |

{ number: 3, hallway: 'C', sleep:() => void} |

{ number: 1, hallway: 'C', train:() => void } |

{ number: 1, hallway: 'A', train:() => void } |

{ number: 2, hallway: 'A', dine: () => void, pass: 'Guest' } |

{ number: 3, hallway: 'A', sleep:() => void } |

{ number: 2, hallway: 'C', dine: () => void, }

) {

switch (floor.number) {

case 1: floor.train(); return;

case 2: floor.dine(); return;

case 3: floor.sleep(); return;

}

}
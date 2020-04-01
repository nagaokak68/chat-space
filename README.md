# README

## users table
| column    |	type    | options      |
| nickname  | string  | unique: true, index: true, null: false |
| email     | string  | null: false  |
| password  | string  | null: false  |

## Association
  has_many :groups, through: :users_group
  has_many :users_group
  has_many :messages

## groups table
| column    |	type    | options      |
| name      | string  | unique: true, null: false |

## Association
  has_many :users, through: :users_group
  has_many :users_group
  has_many :messages


## users_group table
| colum     | type    | option |
| user_id   | integer | null: false, foreign_key: true |
| groups_id | integer | null: false, foreign_key: true |

## Association
belongs_to :user
belongs_to :group


## messages
| column    |	type    | options     |
| user_id   | integer | null: false |
| image     | string  | null: false |

## Association
belongs_to :group
belongs_to :user
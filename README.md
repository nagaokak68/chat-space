# README

## users table
| column    |	type    | options      |
| nickname  | string  | unique: true, index: true, null: false |
| email     | string  | null: false  |
| password  | string  | null: false  |

## Association
  has_many :groups, through: :users_groups
  has_many :users_groups
  has_many :messages

## groups table
| column    |	type    | options      |
| name      | string  | unique: true, null: false |

## Association
  has_many :users, through: :users_groups
  has_many :users_groups
  has_many :messages


## users_group table
| colum     | type    | option |
| user_id   | integer | null: false, foreign_key: true |
| group_id | integer | null: false, foreign_key: true |

## Association
belongs_to :user
belongs_to :group


## messages
| column    |	type    | options     |
| user_id   | integer | null: false, foreign_key: true |
| group_id  | integer | null: false, foreign_key: true |
| image     | string  |
| text      | string  |            

## Association
belongs_to :group
belongs_to :user
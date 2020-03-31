# README

## users table
| column    |	type    | options      |
| user_id   | integer |
| nickname  | string  | unique: true, index: true |
| email     | string  |
| password  | string  |

## Association
  has_many :groups
  has_many :messages
  has_many :groups, through: :users_group


## groups table
| column    |	type    | options      |
| name      | string  | unique: true |

## Association
  has_many :users, through: :members
  has_many :messages


## members table
| colum     | type    |
| user_id   | integer |
| groups_id | integer |

## Association
belongs_to :user
belongs_to :group


## messages
| column    |	type    | options      |
| user_id   | integer | 
| image     | string  | 

## Association
belongs_to :group
belongs_to :user


class user < ActiveRecord::Base
  has_many :users_group
  has_many :groups, through: :users_group
end

class groups < ActiveRecord::Base
  has_many :users_group
  has_many :users, through: :ussers_groups
end

class users_group < ActiveRecord::Base
  belongs_to :user
  belongs_to :group
end

＃＃ユーザーテーブル

## users table
| column    |	type    | options      |
| user_id   | integer |
| nickname  | string  | unique: true |
| email     | string  |
| password  | string  |

## Association
  has_many :users_group
  has_many :groups, through: :users_group

## groups table
| column    |	type    | options      |


## users_group table
| colum     | type    |
| user_id   | integer |
| groups_id | integer |

## Association
belongs_to :user
belongs_to :group


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



ER図
マークダウン
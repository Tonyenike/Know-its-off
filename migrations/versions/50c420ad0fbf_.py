"""empty message

Revision ID: 50c420ad0fbf
Revises: f054b6420d7d
Create Date: 2021-03-18 19:10:03.226778

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '50c420ad0fbf'
down_revision = 'f054b6420d7d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('battery_many_relation_table',
    sa.Column('device_id', sa.Integer(), nullable=False),
    sa.Column('battery_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['battery_id'], ['battery_logger.id'], ),
    sa.ForeignKeyConstraint(['device_id'], ['device.id'], ),
    sa.PrimaryKeyConstraint('device_id', 'battery_id')
    )
    op.alter_column('battery_logger', 'device_battery',
               existing_type=mysql.FLOAT(),
               nullable=True)
    op.drop_constraint('battery_logger_ibfk_1', 'battery_logger', type_='foreignkey')
    op.drop_column('battery_logger', 'device_id')
    op.add_column('user', sa.Column('tokens', sa.Text(), nullable=True))
    op.add_column('user', sa.Column('username', sa.String(length=64), nullable=True))
    op.alter_column('user', 'password',
               existing_type=mysql.VARCHAR(length=512),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=mysql.VARCHAR(length=512),
               nullable=False)
    op.drop_column('user', 'username')
    op.drop_column('user', 'tokens')
    op.add_column('battery_logger', sa.Column('device_id', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False))
    op.create_foreign_key('battery_logger_ibfk_1', 'battery_logger', 'device', ['device_id'], ['id'], ondelete='CASCADE')
    op.alter_column('battery_logger', 'device_battery',
               existing_type=mysql.FLOAT(),
               nullable=False)
    op.drop_table('battery_many_relation_table')
    # ### end Alembic commands ###
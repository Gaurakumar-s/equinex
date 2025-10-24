# Admin Features for Splitwise App

## Overview
This implementation adds comprehensive admin functionality to your Splitwise-like app, allowing group administrators to manage groups and members effectively.

## Features Implemented

### 🔧 Admin Mutations (convex/groups.js)
- **`deleteGroup`** - Admins can delete entire groups (removes all expenses, settlements, and group data)
- **`removeMember`** - Admins can remove members from groups (cleans up related expenses and settlements)
- **`transferAdminRole`** - Admins can transfer admin privileges to another member
- **`leaveGroup`** - Admins can leave groups by transferring admin role first; regular members can leave directly
- **`isCurrentUserAdmin`** - Query to check if current user is admin of a group

### 🎨 UI Components
- **`GroupManagementPanel`** - Main component that shows admin controls for admins, member actions for regular members
- **`GroupMemberActions`** - Simple component for regular members to leave groups
- **`AlertDialog`** - UI component for confirmation dialogs

### 🛡️ Security & Validation
- Only admins can delete groups or remove members
- Admins cannot remove themselves (must use "Leave Group" instead)
- Admins must transfer admin role before leaving groups
- Comprehensive error handling and user feedback
- Confirmation dialogs for all destructive actions

### 🧹 Data Cleanup
- When removing members: cleans up expenses, settlements, and transfers payer responsibilities
- When deleting groups: removes all related expenses and settlements
- When leaving groups: handles expense transfers and settlement cleanup
- Automatic group deletion when last member leaves

## How It Works

### For Admins:
1. **Delete Group**: Complete removal of group and all associated data
2. **Remove Members**: Kick out members with automatic data cleanup
3. **Transfer Admin Role**: Hand over admin privileges to another member
4. **Leave Group**: Transfer admin role and leave (or leave if not admin)

### For Regular Members:
1. **Leave Group**: Simple leave action with data cleanup

## Integration
The admin panel is automatically integrated into the existing group page (`app/(main)/groups/[id]/page.jsx`) and only shows relevant controls based on the user's role.

## Usage Examples

```javascript
// Delete a group (admin only)
await deleteGroup.mutate({ groupId: "group123" });

// Remove a member (admin only)
await removeMember.mutate({ groupId: "group123", memberId: "user456" });

// Transfer admin role (admin only)
await transferAdminRole.mutate({ groupId: "group123", newAdminId: "user789" });

// Leave group (any member)
await leaveGroup.mutate({ groupId: "group123" });
```

## Error Handling
All mutations include comprehensive error handling with user-friendly messages:
- Permission checks
- Data validation
- Graceful failure handling
- Toast notifications for success/error states

## Future Enhancements
- Bulk member removal
- Admin activity logs
- Group settings management
- Member invitation system

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { UserDatabase } from '@/lib/database';

// Admin emails - you can add more admin emails here
const ADMIN_EMAILS = [
  'canadadreamofbillions@gmail.com', // Your email
  // Add more admin emails as needed
];

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.email) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in' },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (!ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.json(
        { error: 'Forbidden - Admin access required' },
        { status: 403 }
      );
    }

    // Get query parameters for pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    // Fetch users from database
    const { users, total } = await UserDatabase.getAllUsers(limit, offset);
    const stats = await UserDatabase.getUserStats();

    return NextResponse.json({
      users,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      stats,
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Test database connection endpoint
export async function POST(request: NextRequest) {
  try {
    // Check if user is authenticated and admin
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user?.email || !ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const isConnected = await UserDatabase.testConnection();
    
    return NextResponse.json({
      connected: isConnected,
      message: isConnected ? 'Database connection successful' : 'Database connection failed'
    });

  } catch (error) {
    console.error('Error testing database connection:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

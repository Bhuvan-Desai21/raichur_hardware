/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rRpDDlWKXNy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function ContactUsTableV0() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Contact Us Queries</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">Export to CSV</Button>
          <Button variant="outline">Mark All as Resolved</Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Timestamp</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>john@example.com</TableCell>
              <TableCell>I have a question about your product.</TableCell>
              <TableCell>John Doe</TableCell>
              <TableCell>Product Inquiry</TableCell>
              <TableCell>2023-05-19 10:30 AM</TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                  variant="outline"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Resolve
                  </Button>
                  <Button color="red" size="sm" variant="destructive">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>jane@example.com</TableCell>
              <TableCell>
                I'd like to provide some feedback on your service.
              </TableCell>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Feedback</TableCell>
              <TableCell>2023-05-18 3:45 PM</TableCell>
              <TableCell>
                <Badge
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                  variant="outline"
                >
                  Resolved
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Resolve
                  </Button>
                  <Button color="red" size="sm" variant="outline">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>bob@example.com</TableCell>
              <TableCell>Can you help me with my order?</TableCell>
              <TableCell>Bob Johnson</TableCell>
              <TableCell>Order Support</TableCell>
              <TableCell>2023-05-17 9:15 AM</TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                  variant="outline"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Resolve
                  </Button>
                  <Button color="red" size="sm" variant="outline">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>sarah@example.com</TableCell>
              <TableCell>I'm interested in your enterprise plan.</TableCell>
              <TableCell>Sarah Lee</TableCell>
              <TableCell>Enterprise Inquiry</TableCell>
              <TableCell>2023-05-16 2:00 PM</TableCell>
              <TableCell>
                <Badge
                  className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                  variant="outline"
                >
                  Resolved
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Resolve
                  </Button>
                  <Button color="red" size="sm" variant="outline">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>michael@example.com</TableCell>
              <TableCell>
                I have a technical issue with your software.
              </TableCell>
              <TableCell>Michael Brown</TableCell>
              <TableCell>Technical Support</TableCell>
              <TableCell>2023-05-15 11:20 AM</TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                  variant="outline"
                >
                  Pending
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline">
                    Resolve
                  </Button>
                  <Button color="red" size="sm" variant="outline">
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

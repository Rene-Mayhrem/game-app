<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller {
    //? get
    public function getEmployees() {
        return response()->json(Employee::all(), 200);
    }

    //? get
    public function getEmployeeById($id) {
        $employee = Employee::find($id);
        if(is_null($employee)) {
            return response()->json(['message' => 'Employee Not Found '], 404);
        }
        return response()->json($employee::find($id), 200); // 200 means OK
    }

    //? post
    public function createEmployee (Request $request) {
         $employee = Employee::create($request->all());
         return response($employee, 201); // 201 means created successfully
    }

    //? put
    public function updateEmployee (Request $request, $id) {
        $employee = Employee::find($id);
        if(is_null($employee)) {
            return response()->json(['message' => 'Employee Not Found'], 404);
        }
        $employee -> update($request->all());
        return response($employee, 200);
    }

    //? delete
    public function deleteEmployee ($id) {
        $employee = Employee::find($id);
        if(is_null($employee)) {
            return response()->json(['message' => 'Employee Not Found'], 404);
        }
        $employee -> delete();
        return response()->json(null, 204); //? 204 not content
    }
}
